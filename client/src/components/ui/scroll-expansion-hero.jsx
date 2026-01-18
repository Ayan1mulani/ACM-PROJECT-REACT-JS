'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import localVideo from '../../assets/4K 2K 1080p 720p 480p video resolution test.mp4';
import CountUp from '../../reuseComponents/CountUp';

// ScrollExpandMedia: core scroll-based hero component
const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);

        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();

        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);

        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-screen h-screen"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className="relative w-full h-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className="w-full h-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-xl"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && (
                    <p
                      className="text-2xl text-blue-200"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-blue-200 font-medium text-center"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200 transition-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-200 transition-none"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            <motion.section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

// Demo content and variants
const sampleMediaContent = {
  video: {
    src: localVideo,
    poster:
      'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    background:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop',
    title: '',
    date: 'ACM - W',
    scrollToExpand: '.',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience.',
      conclusion:
        'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop',
    title: 'Dynamic Image Showcase',
    date: 'Underwater Adventure',
    scrollToExpand: 'Scroll to expand demo',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images.',
      conclusion:
        'The component works equally well with images and videos, giving you flexibility while maintaining the same engaging user experience.',
    },
  },
};

const MediaContent = ({ mediaType }) => {
  const currentMedia = sampleMediaContent[mediaType];

  // Home page content after scroll (video mode)
  if (mediaType === 'video') {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 text-black dark:text-white">
        {/* Mission-driven hero section */}
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Empowering women in computing to learn, lead, and shape the future.
          </h2>
          <p className="max-w-3xl text-sm text-neutral-700 dark:text-neutral-200 md:text-base">
            ACM-W at our institution is a community where women and allies in computing find
            mentorship, opportunities, and a platform to build confidence and impact. This page is
            designed to help students, faculty, and partners understand why ACM-W matters here.
          </p>
        </section>

        {/* Three core pillars */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold md:text-xl">Three pillars of ACM-W on campus</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-500/15 bg-blue-500/5 p-4 backdrop-blur-sm">
              <h4 className="text-base font-semibold md:text-lg">Learn</h4>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                Hands-on workshops, tech talks, and study circles that make core CS concepts and
                emerging technologies accessible to everyone.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-500/15 bg-purple-500/5 p-4 backdrop-blur-sm">
              <h4 className="text-base font-semibold md:text-lg">Lead</h4>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                Real leadership roles in organizing events, mentoring peers, and representing the
                chapter at national ACM-W India forums.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-4 backdrop-blur-sm">
              <h4 className="text-base font-semibold md:text-lg">Support</h4>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                A safe, encouraging space to ask questions, find mentors, and stay in computing even
                when it feels challenging or isolating.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming events (max 3) */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold md:text-xl">Upcoming events</h3>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Orientation · Not a full calendar
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-sm backdrop-blur-lg dark:bg-white/5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                  Workshop
                </p>
                <h4 className="mt-1 text-base font-semibold">
                  Intro to Open Source & Git for Beginners
                </h4>
                <p className="mt-2 text-xs text-neutral-700 dark:text-neutral-300">
                  Hands-on session to help first-year and second-year students make their first
                  contributions.
                </p>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Target: Students exploring opportunities & building confidence.
              </p>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-sm backdrop-blur-lg dark:bg-white/5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  Panel
                </p>
                <h4 className="mt-1 text-base font-semibold">
                  Women in Computing: Faculty & Alumni Perspectives
                </h4>
                <p className="mt-2 text-xs text-neutral-700 dark:text-neutral-300">
                  A conversation on why institutional support for ACM-W chapters matters.
                </p>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Target: Faculty & administrators evaluating ACM-W&apos;s impact.
              </p>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-sm backdrop-blur-lg dark:bg-white/5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Networking
                </p>
                <h4 className="mt-1 text-base font-semibold">
                  Sponsor Connect: Diversity in Tech Roundtable
                </h4>
                <p className="mt-2 text-xs text-neutral-700 dark:text-neutral-300">
                  Invite-only dialogue between industry partners, chapter leaders, and faculty.
                </p>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Target: Potential sponsors & partners assessing collaboration.
              </p>
            </article>
          </div>
        </section>

        {/* Impact stats */}
        <section className="space-y-3 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 p-5 shadow-md backdrop-blur-xl">
          <h3 className="text-lg font-semibold md:text-xl">Impact at a glance</h3>
          <div className="mt-2 grid gap-4 text-center text-sm md:grid-cols-4 md:text-base">
            <div>
            <p className="text-2xl font-bold md:text-3xl">
  <CountUp end={120} suffix="+" />
</p>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                Active student members
              </p>
            </div>
            <div>
                         <p className="text-2xl font-bold md:text-3xl">
  <CountUp end={25} suffix="+" />
</p>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                Events & workshops / year
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold md:text-3xl" >5+</p>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                Years of ACM-W presence
              </p>
            </div>
            <div>
           <p className="text-2xl font-bold md:text-3xl">
  <CountUp end={10}  suffix="+" />
</p>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                Partner institutions & sponsors
              </p>
            </div>
          </div>
        </section>

        {/* CTAs for student / faculty / sponsor */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 backdrop-blur-lg">
            <h4 className="text-base font-semibold md:text-lg">For students</h4>
            <p className="mt-2 text-sm text-neutral-100">
              Join the chapter to access learning circles, mentorship, leadership roles, and a
              community that has your back.
            </p>
            <button className="mt-3 w-full rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400">
              Join ACM-W Chapter
            </button>
          </div>

          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 backdrop-blur-lg">
            <h4 className="text-base font-semibold md:text-lg">For faculty</h4>
            <p className="mt-2 text-sm text-neutral-100">
              Partner with us to mentor students, support events, and align the chapter with your
              department&apos;s academic goals.
            </p>
            <button className="mt-3 w-full rounded-full bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-400">
              Support as Faculty Advisor
            </button>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 backdrop-blur-lg">
            <h4 className="text-base font-semibold md:text-lg">For sponsors</h4>
            <p className="mt-2 text-sm text-neutral-100">
              Collaborate on scholarships, hackathons, and diversity initiatives that create real
              opportunities for women in tech.
            </p>
            <button className="mt-3 w-full rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400">
              Partner with ACM-W
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Fallback simple content for image/demo mode
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
        ACM - W
      </h2>
      <p className="text-lg mb-8 text-black dark:text-white">
        {currentMedia.about.overview}
      </p>
      <p className="text-lg mb-8 text-black dark:text-white">
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

// Default demo that lets you toggle between image and video
const Demo = () => {
  const [mediaType, setMediaType] = useState('video');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>
        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Image
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;



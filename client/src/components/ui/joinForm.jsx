import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JoinForm = ({ type, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate submit
    setTimeout(() => {
      setSubmitted(true);

      // auto close after success
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 1600);
    }, 400);
  };

  return (
<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 md:items-center items-start pt-20 md:pt-0">      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="
          w-full max-w-md
          rounded-2xl
          border border-white/15
          bg-gradient-to-br from-white/10 via-white/5 to-white/10
          p-6
          text-white
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <AnimatePresence mode="wait">
          {/* FORM */}
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <div className="mb-6 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                  ACM – W
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Join as {type === 'student' ? 'Student' : type}
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  Be part of a community that empowers women in tech
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full rounded-xl
                    bg-black/40
                    px-4 py-3
                    text-sm
                    text-white
                    placeholder-white/50
                    outline-none
                    ring-1 ring-white/15
                    focus:ring-2 focus:ring-blue-400
                  "
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full rounded-xl
                    bg-black/40
                    px-4 py-3
                    text-sm
                    text-white
                    placeholder-white/50
                    outline-none
                    ring-1 ring-white/15
                    focus:ring-2 focus:ring-blue-400
                  "
                />

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      w-full rounded-full
                      border border-white/20
                      bg-white/5
                      px-4 py-2.5
                      text-sm
                      text-white/80
                      hover:bg-white/10
                      transition
                    "
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="
                      w-full rounded-full
                      bg-blue-500
                      px-4 py-2.5
                      text-sm font-medium
                      text-white
                      hover:bg-blue-400
                      transition
                    "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* SUCCESS */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white"
              >
                ✓
              </motion.div>

              <h3 className="text-lg font-semibold">
                Successfully Submitted
              </h3>
              <p className="mt-1 text-sm text-white/70">
                We’ll contact you soon
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default JoinForm;
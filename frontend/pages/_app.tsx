import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => console.log('finished')}>
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState: {
              opacity: 1
            },
            animateState: {
              opacity: 0
            },
            exitState: {

            }
          }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

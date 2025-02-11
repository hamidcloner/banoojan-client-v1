'use client'; 
import * as React from 'react';
import { motion, useInView } from 'framer-motion';



export function TypingEffect({ text,textColorCls,durationTime}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      // tracking-tighter =changeTo=> tracking-normal | tracking-wide
      // text-xl text-center sm:text-4xl font-bold tracking-normal md:text-6xl md:leading-[4rem]
      className={`${textColorCls} text-xl text-center sm:text-4xl tracking-normal md:text-4xl md:leading-[4rem]`}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: durationTime, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}





// direction - children - className='' - staggerChildren=0.1
export function TextFade({
  direction,
  children,
  className,
  staggerChildren,
  
}) {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}


export function TextFadeWithHeader({headerText,contentText,headerTextColorCls,contentTextColorCls}){
  return (
    <>
      <TextFade
          direction="up"
          className=''
          staggerChildren={0.5}
      >
          {/* // tracking-tighter =changeTo=> tracking-normal | tracking-wide */}
          {/* sm:text-4xl */}
          {/* p-3 sm:p-3 md:p-8 text-xl text-center font-bold tracking-normal md:text-6xl md:leading-[0rem] prose-h2:my-0 */}

          
          <h2 className={`${headerTextColorCls} p-3 sm:p-3 md:p-8 text-6xl sm:text-6xl text-center font-bold tracking-normal md:text-6xl md:leading-[0rem] prose-h2:my-0`}>
              {headerText}
          </h2>
          {/* prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300 */}

          <div className={`${contentTextColorCls} prose-p:my-1 text-center text-xl md:text-2xl max-w-lg mx-auto text-balance dark:text-zinc-300`}>
            {contentText}
          </div>
      </TextFade>

    </>
  )
}









































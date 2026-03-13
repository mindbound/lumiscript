// src/frontend.ts
function setup(ctx) {
  const cleanups = [];
  return () => {
    for (const fn of cleanups) {
      try {
        fn();
      } catch {}
    }
    ctx.dom.cleanup();
  };
}
export {
  setup
};

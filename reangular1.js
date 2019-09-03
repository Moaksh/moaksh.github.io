  window.addEventListener({
    'scroll',
    throttle(() => {
      handleScroll($aosElements, options.once);
    }, options.throttleDelay)
  );

  return $aosElements;
};
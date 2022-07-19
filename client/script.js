$(document).ready(function () {
  /** ---------------------------- //
   *  @group viewport trigger script
   * for adding or removing classes from elements in view within viewport
   */

  let $animationElements = $(".animation-element");
  let $window = $(window);

  // ps: Let's FIRST disable triggering on small devices!
  let isMobile = window.matchMedia("only screen and (max-width: 768px)");
  if (isMobile.matches) {
    $animationElements.removeClass("animation-element");
  }

  function checkIfInView() {
    let windowHeight = $window.height();
    let windowTopPosition = $window.scrollTop();
    let windowBottomPosition = windowTopPosition + windowHeight;

    $.each($animationElements, function () {
      let $element = $(this);
      let elementHeight = $element.outerHeight();
      let elementTopPosition = $element.offset().top;
      let elementBottomPosition = elementTopPosition + elementHeight;

      //check to see if this current container is within viewport
      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        $element.addClass("animate-fadeIn");
      } else {
        $element.removeClass("animate-fadeIn");
      }
    });
  }

  $window.on("scroll resize", checkIfInView);
  $window.trigger("scroll");
});

/**
 * Liquid Fire transition map.
 */

export default function() {
  var animationTime = 400,
      delay = 200;

  // INITIAL LOAD TRANSITIONS
  this.transition(
    this.onInitialRender(),
    this.use('fade', {
      duration: animationTime
    })
  );

  // BASE ROUTE-ROUTE TRANSITIONS

  // about <-> all other pages
  this.transition(
    this.fromRoute('about'),
    this.toRoute(['about.index', 'design', 'implementation', 'results', 'conclusion', 'team', 'additional']),
    this.use('fade', {
      duration: animationTime
    }),
    this.reverse('fade', {
      duration: animationTime
    })
    // this.debug()
  );

  this.transition(
    this.fromRoute('about.index'),
    this.toRoute('about.project'),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('about.project'),
    this.toRoute('about.real'),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );
}
/**
 * Liquid Fire transition map.
 */

export default function() {
  var fadeTime = 200;

  // INITIAL LOAD TRANSITIONS
  this.transition(
    this.onInitialRender(),
    this.use('fade', {
      duration: fadeTime
    })
  );

  // BASE ROUTE-ROUTE TRANSITIONS

  // index <-> all other pages
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['design', 'implementation', 'results', 'conclusion', 'team', 'additional']),
    this.use('fade', {
      duration: fadeTime
    }),
    this.reverse('fade', {
      duration: fadeTime
    })
    // this.debug()
  );
}
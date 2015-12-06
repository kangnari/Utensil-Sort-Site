/**
 * Liquid Fire transition map.
 */

export default function() {
  var animationTime = 300,
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
    this.toRoute(['design', 'implementation', 'results', 'conclusion', 'team', 'additional']),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
    // this.debug()
  );

  // design <-> all other pages
  this.transition(
    this.fromRoute('design'),
    this.toRoute(['implementation', 'results', 'conclusion', 'team', 'additional']),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  // implementation <-> all other pages
  this.transition(
    this.fromRoute('implementation'),
    this.toRoute(['results', 'conclusion', 'team', 'additional']),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  // results <-> all other pages
  this.transition(
    this.fromRoute('results'),
    this.toRoute(['conclusion', 'team', 'additional']),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  // conclusion <-> all other pages
  this.transition(
    this.fromRoute('conclusion'),
    this.toRoute(['team', 'additional']),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  // team <-> all other pages
  this.transition(
    this.fromRoute('team'),
    this.toRoute(['additional']),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('about.index'),
    this.toRoute('about.project'),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('about.project'),
    this.toRoute('about.real'),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('design.index'),
    this.toRoute(['design.criteria', 'design.choices', 'design.feasibility']),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  )
}
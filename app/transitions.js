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
    this.toRoute(['design', 'implementation', 'results', 'conclusion', 'team']),
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
    this.toRoute(['implementation', 'results', 'conclusion', 'team']),
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
    this.toRoute(['results', 'conclusion', 'team']),
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
    this.toRoute(['conclusion', 'team']),
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
    this.toRoute('team'),
    this.use('toLeft', {
      duration: animationTime
    }),
    this.reverse('toRight', {
      duration: animationTime
    })
  );

  // ABOUT TRANSITIONS

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

  // DESIGN TRANSITIONS

  this.transition(
    this.fromRoute('design.index'),
    this.toRoute(['design.criteria', 'design.image', 'design.navigation', 'design.movement']),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('design.criteria'),
    this.toRoute(['design.image', 'design.navigation', 'design.movement']),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('design.image'),
    this.toRoute(['design.navigation', 'design.movement']),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('design.navigation'),
    this.toRoute('design.movement'),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  // IMPLEMENTATION TRANSITIONS

  this.transition(
    this.fromRoute('implementation.index'),
    this.toRoute(['implementation.hardware', 'implementation.software']),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('implementation.hardware'),
    this.toRoute('implementation.software'),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  // RESULTS TRANSITIONS

   this.transition(
    this.fromRoute('results.index'),
    this.toRoute(['results.product', 'results.conclusion']),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );

  this.transition(
    this.fromRoute('results.product'),
    this.toRoute('results.conclusion'),
    this.use('toUp', {
      duration: animationTime
    }),
    this.reverse('toDown', {
      duration: animationTime
    })
  );





  // VALUE CONSTRAINTS

  // navbar transition on login/logout
  this.transition(
    this.hasClass('animated-nav'),
    this.toValue(true),
    this.use('fade', {
      duration: animationTime,
      delay: animationTime
    }),
    this.reverse('toUp', {
      duration: animationTime
    })
  );
}
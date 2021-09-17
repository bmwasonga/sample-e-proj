import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Marie curie', 'albert Einstein', 'Kabando wa Kabando'];
  }
}

export class PizzaEngine {
  constructor(
    public peopleCount: number,
    public appetite: 'low' | 'medium' | 'high' = 'medium',
    public pizzaSize: 'medium' | 'large' = 'large',
  ) {}

  public getNumPizzas() {
    return (
      (this.peopleCount * this._getSlicesPerPerson()) /
      this._getSlicesPerPizza()
    );
  }

  public static appetiteOptions() {
    return Object.entries(labels.appetite).map(([value, label]) => ({
      value,
      label,
    }));
  }

  public static pizzaSizeOptions() {
    return Object.entries(labels.pizzaSize).map(([value, label]) => ({
      value,
      label,
    }));
  }

  private _getSlicesPerPerson() {
    let result: number;
    switch (this.appetite) {
      case 'low':
        result = 2;
        break;
      case 'high':
        result = 4;
        break;
      case 'medium':
      default:
        result = 3;
        break;
    }
    return result;
  }

  private _getSlicesPerPizza() {
    let result: number;
    switch (this.pizzaSize) {
      case 'medium':
        result = 6;
        break;
      case 'large':
      default:
        result = 8;
        break;
    }
    return result;
  }
}

const labels = {
  appetite: {
    low: 'Low appetite',
    medium: 'Average appetite',
    high: 'Large appetite',
  },
  pizzaSize: {
    medium: 'Medium',
    large: 'Large',
  },
};

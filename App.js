import React, {Component} from 'react';

import Tesla from './Tesla/src/screens/index';
import OnBoarding from './OnBoarding/src/screens/index';
import NikeStore from './NikeStore/src/screens/index';
import FurnitureStore from './FurnitureStore/src/screens/index';
import BookStore from './BookStore/src/screens/index';
import ExpenseTracker from './ExpenseTracker/src/screens/index';
import PlantStore from './PlantStore/src/screens/index';

export class App extends Component {
    render() {
        return <PlantStore />;
    }
}

export default App;

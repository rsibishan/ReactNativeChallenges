import React, {Component} from 'react';

import Tesla from './Tesla/src/screens/index';
import OnBoarding from './OnBoarding/src/screens/index';
import NikeStore from './NikeStore/src/screens/index';
import FurnitureStore from './FurnitureStore/src/screens/index';
import BookStore from './BookStore/src/screens/index';

export class App extends Component {
    render() {
        return <BookStore />;
    }
}

export default App;

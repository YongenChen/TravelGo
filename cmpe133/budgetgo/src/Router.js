/* eslint-disable react-native/no-inline-styles */
import React from 'react';
//import {View} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LandingList from './components/LandingList';
import Favorites from './components/Favorites';
import CreateFavorite from './components/CreateFavorite';
import EditFavorite from './components/EditFavorite';
import Explore from './components/Explore';
import FeedbackForm from './components/FeedbackForm';
import MapLocate from './components/MapLocate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 50}}>
      <Scene
        key="root"
        title="BudgetGo"
        titleStyle={{fontSize: 25}}
        leftTitle=" ">
        <Scene key="auth">
          <Scene
            key="login"
            /*renderTitle={() => {
              <View>
                <AppLogo />
              </View>;
            }}*/
            component={LoginForm}
            title="Please Log In"
            titleStyle={{fontSize: 22}}
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="landingList"
            component={LandingList}
            title="Welcome to BudgetGo"
            titleStyle={{fontSize: 18}}
            rightTitle="Log Out"
            onRight={() => Actions.auth()}
          />
        </Scene>

        <Scene key="favorite">
          <Scene
            key="favoritesPage"
            component={Favorites}
            title="Favorites"
            rightTitle="Add"
            onRight={() => Actions.favoritesCreate()}
            backTitle=""
          />
          <Scene
            key="favoritesCreate"
            component={CreateFavorite}
            renderBackButton={() => null}
            title="Create Favorite"
            onLeft={() => null}
          />
          <Scene
            key="editFavorite"
            component={EditFavorite}
            title="Edit Favorite"
            onLeft={() => null}
            backTitle=""
          />
        </Scene>

        <Scene key="map">
          <Scene
            key="explorePage"
            component={Explore}
            title="Explore"
            onLeft={() => null}
            backTitle=""
            rightTitle="Find"
            onRight={() => Actions.explore()}
          />
          <Scene
            key="explore"
            component={MapLocate}
            title="Find A Location"
            backTitle=""
            onLeft={() => null}
          />
        </Scene>

        <Scene key="feedback">
          <Scene
            key="feedbackForm"
            component={FeedbackForm}
            title="Send Feedback"
            onLeft={() => null}
            backTitle=""
          />
        </Scene>
      </Scene>
    </Router>
  );
};

/*const AppLogo = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 26}}>
      <Image
        source={require('./images/budgetgocar.png')}
        style={{width: 84, height: 27}}
      />
    </View>
  );
};*/

export default RouterComponent;

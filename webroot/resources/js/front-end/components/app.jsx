import React from 'react';
import {
  App,
  Panel,
  Views,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  Button,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'Laravel/React Demo', // App name
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {};
        },
        // App routes
        routes: routes,
        // Enable panel left visibility breakpoint
        panel: {
          leftBreakpoint: 960,
        },
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },
      }
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar></Statusbar>

        {/* Left panel with cover effect when hidden */}
        <Panel left cover themeDark>
          <View panel-control>
            <Page>
              <Navbar title="Left Panel"/>
              <List>
                <ListButton fill raised popupOpen="#my-popup">Log In</ListButton>
              </List>
              {/* <BlockTitle>Control Main View</BlockTitle>
              <List>
                <ListItem link="/about/" view=".view-main" panel-close title="About"/>
                <ListItem link="/form/" view=".view-main" panel-close title="Form"/>
                <ListItem link="#" view=".view-main" back panel-close title="Back in history"/>
              </List> */}
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        {/* <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel> */}


        {/* Your main view, should have "view-main" class */}
        <View main appName={ this.state.f7params.name } className="safe-areas" url="/" />


          {/* Popup, used for Google Authorization */}
          <Popup id="my-popup">
            <View>
              <Page>
                <Navbar title="Popup">
                  <NavRight>
                    <Link popupClose>Close</Link>
                  </NavRight>
                </Navbar>
                <Block>
                  <p>Popup content goes here.</p>
                </Block>
              </Page>
            </View>
          </Popup>

        {/* <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListInput
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={this.state.username}
                  onInput={(e) => this.setState({username: e.target.value})}
                ></ListInput>
                <ListInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onInput={(e) => this.setState({password: e.target.value})}
                ></ListInput>
              </List>
              <List>
                <ListButton title="Sign In" loginScreenClose onClick={() => this.alertLoginData()} />
                <BlockFooter>
                  Some text about login information.<br />Click "Sign In" to close Login Screen
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen> */}
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {
      // Call F7 APIs here
    });
  }
}

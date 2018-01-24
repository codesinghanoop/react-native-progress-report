import Style from './Style.js';

import React from 'react';
import {View, LayoutAnimation} from 'react-native';

export default class ProgressBar extends React.Component {
  constructor () {
    super ();
    this.state = {
      percentage: 0,
      init_animation: false,
    };
  }

  componentDidMount () {
    LayoutAnimation.spring ();
    setTimeout (() => {
      this.setState ({percentage: this.props.percentage});
    }, 0);
  }

  componentWillReceiveProps (nextProps) {
    this.setState ({percentage: nextProps.percentage});
  }

  componentWillUpdate () {
    LayoutAnimation.spring ();
  }

  render () {
    const percentage = this.state.percentage;
    let firstCircle = percentage,
      firstBar = percentage - 10,
      secondCircle = percentage - 30,
      secondBar = percentage - 40,
      thirdCircle = percentage - 60,
      thirdBar = percentage - 70,
      fourthCircle = percentage - 90;
    if (percentage >= 10) {
      firstCircle = 10;
    }
    if (percentage >= 30) {
      firstBar = 20;
    }
    if (percentage >= 40) {
      secondCircle = 10;
    }
    if (percentage >= 60) {
      secondBar = 20;
    }
    if (percentage >= 70) {
      thirdCircle = 10;
    }
    if (percentage >= 90) {
      thirdBar = 20;
    }
    if (percentage == 100) {
      fourthCircle = 10;
    }

    var chart = (
      <View style={[{height: 80, width: 260}, this.props.containerStyle]}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 100}}>
          <View style={[Style.progressCircle, {borderColor: '#AD6969'}]}>
            <View style={{flexDirection: 'row', flex: 10}}>
              <View
                style={{
                  backgroundColor: '#AD6969',
                  flex: firstCircle,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderTopRightRadius: percentage >= 10 ? 10 : 0,
                  borderBottomRightRadius: percentage >= 10 ? 10 : 0,
                  overflow: 'hidden',
                }}
              />
              <View
                style={{
                  backgroundColor: 'transparent',
                  flex: 10 - firstCircle,
                  overflow: 'hidden',
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: 5,
              width: 60,
              borderColor: '#AD6969',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              flex: 20,
            }}
          >
            <View style={{flexDirection: 'row', flex: 20}}>
              <View style={{backgroundColor: '#AD6969', flex: firstBar}} />
              <View
                style={{backgroundColor: 'transparent', flex: 20 - firstBar}}
              />
            </View>
          </View>
          <View style={[Style.progressCircle, {borderColor: '#EA7840'}]}>
            <View style={{flexDirection: 'row', flex: 10}}>
              <View
                style={{
                  backgroundColor: '#EA7840',
                  flex: secondCircle,
                  display: 'flex',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderTopRightRadius: percentage >= 40 ? 10 : 0,
                  borderBottomRightRadius: percentage >= 40 ? 10 : 0,
                  overflow: 'hidden',
                }}
              />
              <View
                style={{
                  backgroundColor: 'transparent',
                  flex: 10 - secondCircle,
                  overflow: 'hidden',
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: 5,
              width: 60,
              borderColor: '#EA7840',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              flex: 20,
            }}
          >
            <View style={{flexDirection: 'row', flex: 20}}>
              <View style={{backgroundColor: '#EA7840', flex: secondBar}} />
              <View
                style={{backgroundColor: 'transparent', flex: 20 - secondBar}}
              />
            </View>
          </View>
          <View style={[Style.progressCircle, {borderColor: '#EA406E'}]}>
            <View style={{flexDirection: 'row', flex: 10}}>
              <View
                style={{
                  backgroundColor: '#EA406E',
                  flex: thirdCircle,
                  display: 'flex',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderTopRightRadius: percentage >= 70 ? 10 : 0,
                  borderBottomRightRadius: percentage >= 70 ? 10 : 0,
                  overflow: 'hidden',
                }}
              />
              <View
                style={{
                  backgroundColor: 'transparent',
                  flex: 10 - thirdCircle,
                  borderRadius: 15,
                  overflow: 'hidden',
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: 5,
              width: 60,
              borderColor: '#EA406E',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              flex: 20,
            }}
          >
            <View style={{flexDirection: 'row', flex: 20}}>
              <View style={{backgroundColor: '#EA406E', flex: thirdBar}} />
              <View
                style={{backgroundColor: 'transparent', flex: 20 - thirdBar}}
              />
            </View>
          </View>
          <View style={[Style.progressCircle, {borderColor: '#EA40A1'}]}>
            <View style={{flexDirection: 'row', flex: 10}}>
              <View
                style={{
                  backgroundColor: '#EA40A1',
                  flex: fourthCircle,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderTopRightRadius: percentage >= 100 ? 10 : 0,
                  borderBottomRightRadius: percentage >= 100 ? 10 : 0,
                  overflow: 'hidden',
                }}
              />
              <View
                style={{
                  backgroundColor: 'transparent',
                  flex: 10 - fourthCircle,
                  borderRadius: 15,
                  overflow: 'hidden',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
    return chart;
  }
}

ProgressBar.defaultProps = {
  percentage: 0,
};

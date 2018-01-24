import React from 'react-native';
var {StyleSheet} = React;

var Style = StyleSheet.create ({
  flexBox: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
  },
  progressCircle: {
    borderWidth: 2,
    display: 'flex',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  progressHalfCircle: {
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    marginLeft: -6,
  },
  progressEndCircle: {
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderLeftColor: 'transparent',
    marginLeft: -6,
  },
  progressBar: {
    overflow: 'hidden',
    height: 20,
    borderWidth: 2,
    borderColor: 'rgb(0, 122, 255)',
    borderRadius: 10,
    marginBottom: 5,
  },
  progressBar_left: {
    backgroundColor: '#62aeff',
  },
  progressBar_right: {
    backgroundColor: 'transparent',
  },
  progressBar_mes: {
    position: 'absolute',
    right: 0,
    paddingRight: 5,
    // lineHeight: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  progressBar__balloon: {
    position: 'absolute',
    padding: 3,
    right: -15,
    backgroundColor: '#62aeff',
    borderRadius: 2,
    paddingRight: 5,
    flexDirection: 'row',
  },
  progressBar__balloonArrow: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    backgroundColor: '#62aeff',
    borderRadius: 30,
    width: 30,
    height: 30,
  },
  progressBar__val: {
    // textAlign: 'center',
    color: '#fff',
    // lineHeight: 30,
  },
  progressBar__balloonVal: {
    textAlign: 'center',
    color: '#fff',
    // lineHeight: 30,
  },
  labelWrap: {
    position: 'absolute',
    top: 0,
    left: 0.2,
  },
  label: {
    color: 'rgb(0, 122, 255)',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'center',
  },
});

export default Style;

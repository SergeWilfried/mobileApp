/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  NativeModules,
  requireNativeComponent,
  UIManager,
  findNodeHandle,
  ViewPropTypes,
} from 'react-native';
import { getToken } from 'helpers/storage';

const { RNVGSCollect } = NativeModules;

export const VGSCardTextField = requireNativeComponent('RNVGSCardTextField');
export const VGSCVCTextField = requireNativeComponent('RNVGSCVCTextField');
export const VGSExpDateTextField = requireNativeComponent(
  'RNVGSExpDateTextField',
);

const RNVGSShowLabelView = requireNativeComponent('RNVGSShowLabelView');
const RNVGSShowView = requireNativeComponent('RNVGSShowView');

export function VGSShowView({ cardId, onHandle, style }) {
  const nativeRNVGSShowViewRef = useRef();

  useEffect(() => {
    const nodeHandle = findNodeHandle(nativeRNVGSShowViewRef.current);
    onHandle(nodeHandle);
  }, []);

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        UIManager.dispatchViewManagerCommand(
          findNodeHandle(nativeRNVGSShowViewRef.current),
          UIManager.RNVGSShowView.Commands.revealFromManager,
          [cardId, await getToken()],
        );
      }, 256);
    })();
  }, [cardId]);

  return <RNVGSShowView style={style} ref={nativeRNVGSShowViewRef} />;
}

VGSShowView.propTypes = {
  cardId: PropTypes.string,
  onHandle: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

VGSShowView.defaultProps = {
  cardId: '',
  style: null,
};

export function VGSShowLabelView({ nodeHandle, contentPath, style }) {
  return (
    <RNVGSShowLabelView
      style={style}
      contentPath={contentPath}
      vgsShowViewNodeHandle={nodeHandle}
    />
  );
}

VGSShowLabelView.propTypes = {
  nodeHandle: PropTypes.number.isRequired,
  contentPath: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

VGSShowLabelView.defaultProps = {
  style: null,
};

export const submitCardData = async (extraCardData, callback) => {
  const token = await getToken();
  return RNVGSCollect.submitCardData(extraCardData, token, callback);
};

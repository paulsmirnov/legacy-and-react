import React from 'react';
import ResetButton from "./ResetButton";
import Input from "./Input";

function withLegacyPrefs(Component) {
  return function LegacyPrefsControl(props) {
    const onChange = (value) => {
      if (props.legacy) {
        props.legacy.set(props.prefName, Number(value) || 0);
      }
    };
    const value = props.legacy && props.legacy.get(props.prefName) || 0;

    return <Component value={ value } onChange={ onChange } />;
  };
}

export const LegacyPrefsButton = withLegacyPrefs(ResetButton);
export const LegacyPrefsInput = withLegacyPrefs(Input);

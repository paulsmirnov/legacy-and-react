import React from 'react';
import ResetButton from "./ResetButton";
import Input from "./Input";
import Checkbox from "./Checkbox";

function withLegacyPrefs(Component) {
  return function LegacyPrefsControl(props) {
    const onChange = (value) => {
      if (props.legacy) {
        value = (value !== undefined) ? props.prefType(value) : props.prefType();
        if (!Number.isNaN(value)) {
          props.legacy.set(props.prefName, value);
        }
      }
    };
    const value = props.legacy && props.prefType(props.legacy.get(props.prefName)) || props.prefType();

    return <Component value={ value } onChange={ onChange } />;
  };
}

export const LegacyPrefsButton = withLegacyPrefs(ResetButton);
export const LegacyPrefsInput = withLegacyPrefs(Input);
export const LegacyPrefsCheckbox = withLegacyPrefs(Checkbox);

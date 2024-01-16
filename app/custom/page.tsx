'use client';
import React from "react";
import { ICheckboxProps, Checkbox, ICheckboxStyles, ITheme, getTheme } from "@fluentui/react";

export interface ICustomCheckboxProps extends ICheckboxProps {
  customStyles?: {
    default?: ICheckboxStyles;
    hover?: ICheckboxStyles;
    focus?: ICheckboxStyles;
    disabled?: ICheckboxStyles;
  };
}

function CustomCheckbox(props: ICustomCheckboxProps): JSX.Element {
  const { customStyles, ...checkboxProps } = props;
  const theme: ITheme = getTheme();

  const checkboxStyles: ICheckboxStyles = {
    checkbox: {
      ...customStyles?.default,
      selectors: {
        '&:hover .ms-Checkbox-input': customStyles?.hover,
        '&:focus .ms-Checkbox-input': customStyles?.focus,
      },
    },
    input: {
      selectors: {
        '&:disabled + .ms-Checkbox-label': customStyles?.disabled,
      },
    },
  };

  return <Checkbox {...checkboxProps}  />;
}

function CustomApp() {
  return (
    <div>
      <CustomCheckbox
        label="Label"
        customStyles={{
          hover: {
            borderColor: 'blue',
            border: '1px solid blue',
            color: 'red',
          },
        }}
      />
    </div>
  );
}

export default CustomApp;




// 'use client';
// import { ICheckboxProps, Checkbox, ICheckboxStyles, ITheme, getTheme } from "@fluentui/react";
// import * as React from "react";

// export interface ICustomCheckboxProps extends ICheckboxProps {
//   customStyles?: {
//     default?: ICheckboxStyles;
//     hover?: ICheckboxStyles;
//     focus?: ICheckboxStyles;
//     disabled?: ICheckboxStyles;
//   };
// }

// function CustomCheckbox(props: ICustomCheckboxProps): React.ReactNode {
//   const { customStyles, ...checkboxProps } = props;
//   const theme: ITheme = getTheme();

//   const checkboxStyles: ICheckboxStyles = {
//     checkbox: {
//       ...customStyles?.default,
//       selectors: {
//         '&:hover .ms-Checkbox-input': customStyles?.hover,
//         '&:focus .ms-Checkbox-input': customStyles?.focus,
//       },
//     },
//     input: {
//       selectors: {
//         '&:disabled + .ms-Checkbox-label': customStyles?.disabled,
//       },
//     },
//   };
//   <CustomCheckbox
//   customStyles={{
//     hover: {
//       backgroundColor: 'lightblue', 
//     },
//   }}
// />

//   return <Checkbox {...checkboxProps} styles={{ ...checkboxProps.styles, ...checkboxStyles }} theme={theme} />;
// }

// export default CustomCheckbox;

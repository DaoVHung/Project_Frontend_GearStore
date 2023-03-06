import React from 'react'

export default function paging() {
  return (
 
    <div className="MuiBox-root css-cz6ae8">
      <div
        className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon css-1vumohw-MuiAutocomplete-root"
        role="combobox"
        aria-expanded="false"
      >
        <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-1c3j9he-MuiFormControl-root-MuiTextField-root">
          <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-1qnrw8l-MuiInputBase-root-MuiOutlinedInput-root">
            <input
              aria-invalid="false"
              autoComplete="off"
              type="text"
              className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-qnqh4t-MuiInputBase-input-MuiOutlinedInput-input"
              aria-autocomplete="list"
              autoCapitalize="none"
              spellCheck="false"
              defaultValue={15}
              id="mui-45"
            />
            <div className="MuiAutocomplete-endAdornment css-1q60rmi-MuiAutocomplete-endAdornment">
              <button
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator css-181t24u-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator"
                tabIndex={-1}
                type="button"
                aria-label="Open"
                title="Open"
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-eimhud-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDropDownIcon"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root" />
              </button>
            </div>
            <fieldset
              aria-hidden="true"
              className="MuiOutlinedInput-notchedOutline css-135f4hd-MuiOutlinedInput-notchedOutline"
            >
              <legend className="css-nnbavb">
                <span className="notranslate">​</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <span className="MuiTypography-root MuiTypography-caption css-txmvxv-MuiTypography-root">
        &nbsp;&nbsp;entries per page
      </span>
    </div>
  
  )
}

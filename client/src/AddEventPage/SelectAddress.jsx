import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { getLatLng, geocodeByPlaceId } from "react-google-places-autocomplete";
import { config } from "../config";

const SelectAddress = ({
  location,
  onChangeCoordinates,
  onChangeLocation,
}) => {
  return (
    <GooglePlacesAutocomplete
      debounce={2000}
      apiOptions={{ language: 'ua', region: 'ua' }}
      selectProps={{
        value: location,
        onChange: (addressData) => {
          geocodeByPlaceId(addressData.value.place_id)
            .then((result) => getLatLng(result[0]))
            .then(onChangeCoordinates);
          onChangeLocation(addressData);
        },
      }}
      apiKey={config.apiKey}
    />
  );
};

export default SelectAddress;

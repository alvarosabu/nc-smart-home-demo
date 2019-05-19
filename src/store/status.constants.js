const LOADING = {
  isLoading: true,
  isLoaded: false,
  error: null,
};

const LOADING_SUCCESS = {
  isLoading: false,
  isLoaded: true,
};

const LOADING_FAILED = {
  isLoading: false,
  isLoaded: false,
};

const SAVING = {
  isSaving: true,
  isSaved: false,
  error: null,
};

const SAVING_SUCCESS = {
  isSaving: false,
  isSaved: true,
};

const SAVING_FAILED = {
  isSaving: false,
  isSaved: false,
};

export default {
  LOADING,
  LOADING_SUCCESS,
  LOADING_FAILED,
  SAVING,
  SAVING_SUCCESS,
  SAVING_FAILED,
};

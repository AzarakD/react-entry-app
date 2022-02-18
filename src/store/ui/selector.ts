import { State, UiState } from '../../types';

export const getUiState = (state: State): UiState => state.ui;

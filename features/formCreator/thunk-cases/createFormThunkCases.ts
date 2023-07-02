// import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// export function addCreateCardThunkCases(
//   builder: ActionReducerMapBuilder<ApplicantTrackerState>
// ) {
//   builder
//     .addCase(createFormThunk.pending, (state) => {
//       state.status = TrackerStatus.LOADING;
//     })
//     .addCase(createFormThunk.fulfilled, (state, action) => {
//       addCardReducer(state, action);
//       state.status = TrackerStatus.IDLE;
//     })
//     .addCase(createFormThunk.rejected, (state, action) => {
//       state.status = TrackerStatus.FAILED;
//       console.log(action);
//     });
// }

// here we create action creator functions.
/**
 * Basically instead of creating a normal action object we create a function that returns the action object
 */

export const setCurrentUser = (user) => ({
	type: 'SET_CURRENT_USER',
	payload: user,
});

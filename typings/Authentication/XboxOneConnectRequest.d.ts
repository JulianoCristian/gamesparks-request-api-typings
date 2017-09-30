declare namespace SparkRequests {
    /**
     * Allows an Xbox One XSTS token to be used as an authentication mechanism.
     * Once authenticated the platform can determine the current players details from Xbox Live and store them within GameSparks.
     * If the Xbox One user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox One user is not already registered with the game, the Xbox One user will be linked to the current player.
     * If the current player has not authenticated and the Xbox One user is not known, a new player will be created using the Xbox Live details and the session will be authenticated against the new player.
     * If the Xbox One user is already known, the session will switch to being the previously created user.
     */
    class XboxOneConnectRequest extends _Request<_XboxOneConnectResponse> {
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         */
        errorOnSwitch: boolean;
        /**
         * The Xbox Live sandbox to use. If not specified, the sandbox from the decoded token will be used.
         */
        sandbox: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         */
        syncDisplayName: boolean;
        /**
         * The Xbox One authentication token
         */
        token: string;
    }
    class _XboxOneConnectResponse extends _Response {
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         */
        errorOnSwitch: boolean;
        /**
         * The Xbox Live sandbox to use. If not specified, the sandbox from the decoded token will be used.
         */
        sandbox: string;
        /**
         * An optional segment configuration for this request.
         */
        segments: JSON;
        /**
         * Indicates that the server should switch to the supplied profile if it isalready associated to a player. Defaults to false.
         */
        switchIfPossible: boolean;
        /**
         * Indicates that the associated players displayName should be kept in syn with this profile when it’s updated by the external provider.
         */
        syncDisplayName: boolean;
        /**
         * The Xbox One authentication token
         */
        token: string;
    }
}
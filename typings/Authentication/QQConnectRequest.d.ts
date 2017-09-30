declare namespace SparkRequests {
    /**
     * Allows a QQ access token to be used as an authentication mechanism.
     * Once authenticated the platform can determine the current players details from the QQ platform and store them within GameSparks.
     * If the QQ user is already linked to a player, the current session will switch to the linked player.
     * If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the QQ user is not already registered with the game, the QQ user will be linked to the current player.
     * If the current player has not authenticated and the QQ user is not known, a new player will be created using the QQ details and the session will be authenticated against the new player.
     * If the QQ user is already known, the session will switch to being the previously created user.
     */
    class QQConnectRequest extends _Request<_QQConnectResponse> {
        /**
         * The access token is used by the client to make authenticated requests on behalf of the end user.
         */
        accessToken: string;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         */
        errorOnSwitch: boolean;
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
    }
    class _QQConnectResponse extends _Response {
        /**
         * The access token is used by the client to make authenticated requests on behalf of the end user.
         */
        accessToken: string;
        /**
         * Indicates that the server should not try to link the external profile with the current player.  If false, links the external profile to the currently signed in player.  If true, creates a new player and links the external profile to them.  Defaults to false.
         */
        doNotLinkToCurrentPlayer: boolean;
        /**
         * Indicates whether the server should return an error if an account switch would have occurred, rather than switching automatically.  Defaults to false.
         */
        errorOnSwitch: boolean;
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
    }
}
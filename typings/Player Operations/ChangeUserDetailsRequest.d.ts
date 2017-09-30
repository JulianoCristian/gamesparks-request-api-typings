declare namespace SparkRequests {
    /**
     * Change the details of the currently signed in Player.
     */
    class ChangeUserDetailsRequest extends _Request<_ChangeUserDetailsResponse> {
        /**
         * The new display name to set in the player data.
         */
        displayName: string;
        /**
         * The new language code to set in the player data.
         */
        language: string;
        /**
         * The new password to set in the player data.
         */
        newPassword: string;
        /**
         * The player’s existing password. If supplied it will be checked against the password stored in the player data. This allows you re-authenticate the player making the change.
         */
        oldPassword: string;
        /**
         * The new userName with which this player will sign in.  If the player currently authenticates using device authentication this will upgrade their account and require them to use username and password authentication from now on.
         */
        userName: string;
    }
    class _ChangeUserDetailsResponse extends _Response {
        /**
         * The new display name to set in the player data.
         */
        displayName: string;
        /**
         * The new language code to set in the player data.
         */
        language: string;
        /**
         * The new password to set in the player data.
         */
        newPassword: string;
        /**
         * The player’s existing password. If supplied it will be checked against the password stored in the player data. This allows you re-authenticate the player making the change.
         */
        oldPassword: string;
        /**
         * The new userName with which this player will sign in.  If the player currently authenticates using device authentication this will upgrade their account and require them to use username and password authentication from now on.
         */
        userName: string;
    }
}
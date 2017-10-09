declare namespace SparkRequests {
    /**
     * Allows a player to find challenges that they are eligible to join.
     */
    class FindChallengeRequest extends _Request<_FindChallengeResponse> {
        /**
         * The type of challenge to find, either PUBLIC or FRIENDS.  Defaults to FRIENDS
         * @Required Yes
         */
        accessType: string;
        /**
         * The number of challenges to return (MAX=50)
         * @Required No
         */
        count: number;
        /**
         * Optional.  Allows the current player’s eligibility to be overridden by what is provided here.
         * @Required Yes
         */
        eligibility: JSON;
        /**
         * The offset to start from when returning challenges (used for paging)
         * @Required No
         */
        offset: number;
        /**
         * Optional shortCodes to filter the results by challenge type
         * @Required No
         */
        shortCode: string[];
    }
    class _FindChallengeResponse extends _Response {
        /**
         * A list of JSON objects representing the challenges.
         */
        challengeInstances: Challenge[];
        /**
         * A JSON Map of any data added either to the Request or the Response by your Cloud Code
         */
        scriptData: ScriptData;
    }
}

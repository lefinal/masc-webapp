export enum MessageType {
  AbortMatch = 'abort-match',
  /**
   * Used for setting the name of a Device.
   */
  SetDeviceName = 'set-device-name',
  /**
   * AreYouReady is used for requesting ready-state from actors. Actors
   * can send messages with ReadyState for notifying of their current
   * ready-state. Ready request is finished with ReadyAccepted.
   */
  AreYouReady = 'are-you-ready',
  /**
   * Used with {@link MessageDeleteDevice} by {@link RoleType.DeviceManager} for deleting a device.
   */
  DeleteDevice = 'delete-device',
  /**
   * Used with {@link MessageDeleteFixture} for deleting a fixture.
   */
  DeleteFixture = 'delete-fixture',
  /**
   * Used with {@link MessageDeleteLightSwitch} for deleting a light switch.
   */
  DeleteLightSwitch = 'delete-light-switch',
  /**
   * DeviceList is used with MessageDeviceList as an answer to
   * GetDevices.
   */
  DeviceList = 'device-list',
  /**
   * Error is used for error messages. The content is being set to the
   * detailed error.
   */
  Error = 'error',
  /**
   * Fired is used when an actor is fired.
   */
  Fired = 'fired',
  /**
   * FixtureBasicSetState is used for setting the state of
   * FixtureTypeBasic.
   */
  FixtureBasicState = 'fixture-basic-state',
  /**
   * FixtureDimmerSetState is used for setting the state of
   * FixtureTypeDimmer.
   */
  FixtureDimmerState = 'fixture-dimmer-state',
  /**
   * Used with {@link MessageFixtureList} as list of fixtures as an answer to {@link GetFixtures}.
   */
  FixtureList = 'fixture-list',
  /**
   * Received from server by {@link RoleType.FixtureOperator}.
   */
  FixtureStates = 'fixture-states',
  /**
   * GetDevices is received when devices are requested.
   */
  GetDevices = 'get-devices',
  /**
   * Received from server for requesting offered fixtures.
   */
  GetFixtureOffers = 'get-fixture-offers',
  /**
   * Sent to the server for requesting all known fixtures.
   */
  GetFixtures = 'get-fixtures',
  /**
   * Sent to the server by {@link RoleType.FixtureOperator} for requesting fixture states.
   */
  GetFixtureStates = 'get-fixture-states',
  /**
   * Sent to the server by {@link RoleType.LightSwitchManager} for requesting light switches.
   */
  GetLightSwitches = 'get-light-switches',
  /**
   * Hello is received with MessageHello for saying hello to the
   * server.
   */
  Hello = 'hello',
  /**
   * MatchStatus is a container for status information regarding a
   * Match.
   */
  MatchStatus = 'match-status',
  /**
   * OK is used only for confirmation of actions that do not require a
   * detailed response.
   */
  OK = 'ok',
  /**
   * Fixtures provides all available fixtures from a fixture provider.
   * Used with MessageFixtures.
   */
  FixtureOffers = 'fixture-offers',
  /**
   * Received for {@link RoleType.LightSwitchManager} after requesting light switches via {@link GetLightSwitches}.
   */
  LightSwitchList = 'light-switch-list',
  /**
   * Used with {@link MessageNextLogEntries} for when new log entries are published.
   */
  NextLogEntries = 'next-log-entries',
  /**
   * PlayerJoin is used for joining a player for a match.
   */
  PlayerJoin = 'player-join',
  /**
   * PlayerJoinClosed is used for notifying that no more player can
   * join a match.
   */
  PlayerJoinClosed = 'player-join-closed',
  /**
   * PlayerJoinOpen notifies that players can now join.
   */
  PlayerJoinOpen = 'player-join-open',
  /**
   * PlayerJoined is sent to everyone participating in a match when a
   * player joined.
   */
  PlayerJoined = 'player-joined',
  /**
   * PlayerLeave is received when a player wants so leave a match.
   */
  PlayerLeave = 'player-leave',
  /**
   * PlayerLeft is sent to everyone participating in a match when a
   * player left.
   */
  PlayerLeft = 'player-left',
  /**
   * ReadyAccepted is used for ending ready-state requests that were
   * initially started with AreYouReady.
   */
  ReadyAccepted = 'ready-accepted',
  /**
   * ReadyState is used with MessageReadyState for notifying that an
   * actor is (not) ready.
   */
  ReadyState = 'ready-state',
  /**
   * ReadyStateUpdate is used with MessageReadyStateUpdate for
   * broadcasting ready-states to all actors participating in a match.
   */
  ReadyStateUpdate = 'ready-state-update',
  /**
   * RequestRoleAssignments is used with MessageRequestRoleAssignments
   * for requesting role assignments. Usually, this is sent to a game master. Used
   * with MessageRequestRoleAssignments.
   */
  RequestRoleAssignments = 'request-role-assignments',
  /**
   * RoleAssignments is used with MessageRoleAssignments for when an
   * assignment request was fulfilled.
   */
  RoleAssignments = 'role-assignments',
  /**
   * Used with {@link MessageSetFixtureName} for updating the name of a fixture.
   */
  SetFixtureName = 'set-fixture-name',
  /**
   * Used with {@link MessageSetFixturesEnabled} for setting the enabled-state for fixtures.
   */
  SetFixturesEnabled = 'set-fixtures-enabled',
  /**
   * Used with {@link MessageSetFixturesLocating} for setting the locating-mode for fixtures.
   */
  SetFixturesLocating = 'set-fixtures-locating',
  /**
   * Used with {@link UpdateLightSwitch} by {@link RoleType.LightSwitchManager} for updating a light switch.
   */
  UpdateLightSwitch = 'update-light-switch',
  /**
   * Welcome is sent to the client when he is welcomed at the server.
   * Used with MessageWelcome.
   */
  Welcome = 'welcome',
  /**
   * YouAreIn is used with MessageYouAreIn for notifying an actor that
   * he now has a job.
   */
  YouAreIn = 'you-are-in',
}

/**
 * Container for all messages that are sent and received.
 */
export interface MessageContainer<T> {
  /**
   * Type of the message.
   */
  message_type: MessageType;
  /**
   * Optional device id that is used in order to identify a device.
   */
  device_id?: string;
  /**
   * Optional actor id for concurrent communication with actors that use the same device.
   */
  actor_id?: string;
  /**
   * The actual message content.
   */
  content?: T;
}

/**
 * Role types for acting.
 *
 * **Warning**: When adding types, don't forget to add them to {@link getRoleByStr} and {@link getRoleTypeName}.
 */
export enum RoleType {
  DeviceManager = 'device-manager',
  FixtureManager = 'fixture-manager',
  FixtureOperator = 'fixture-operator',
  FixtureProvider = 'fixture-provider',
  LightSwitchManager = 'light-switch-manager',
  LogMonitor = 'log-monitor',
}

/**
 * Returns a human-readable {@link RoleType} name.
 * @param rt The role type to get a name for.
 */
export function getRoleTypeName(rt: RoleType): string {
  switch (rt) {
    case RoleType.DeviceManager:
      return 'Device Manager';
    case RoleType.FixtureManager:
      return 'Fixture Manager';
    case RoleType.FixtureOperator:
      return 'Fixture Operator';
    case RoleType.FixtureProvider:
      return 'Fixture Provider';
    case RoleType.LightSwitchManager:
      return 'Light Switch Manager';
    case RoleType.LogMonitor:
      return 'Log Monitor';
  }
}

export function getRoleByStr(roleStr: string): RoleType {
  switch (roleStr) {
    case RoleType.DeviceManager:
      return RoleType.DeviceManager;
    case RoleType.FixtureManager:
      return RoleType.FixtureManager;
    case RoleType.FixtureOperator:
      return RoleType.FixtureOperator;
    case RoleType.FixtureProvider:
      return RoleType.FixtureProvider;
    case RoleType.LightSwitchManager:
      return RoleType.LightSwitchManager;
    case RoleType.LogMonitor:
      return RoleType.LogMonitor;
    default:
      throw new Error(`unknown role type: ${ roleStr }`);
  }
}

/**
 * Returns the {@link RoleType}s from the given comma-separated role list.
 * @param rolesStr The comma-separated list.
 */
export function getRolesFromStr(rolesStr?: string): RoleType[] {
  if (!rolesStr) {
    return [];
  }
  const rolesStrSegments = rolesStr.split(',');
  return rolesStrSegments.map(getRoleByStr);
}

/**
 * Creates a comma-separated list from the given roles.
 * @param roles The roles to created the string from.
 */
export function getRolesStrFromRoles(roles: RoleType[]): string {
  return roles.join(',');
}

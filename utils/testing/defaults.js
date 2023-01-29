export const emptyCallback = () => {};
export const identityCallback = (fixture_) => fixture_;

// Default organization
export const defaultOrganization = {
    "setup": emptyCallback,
    "prepare": identityCallback,
    "teardown": emptyCallback
  }

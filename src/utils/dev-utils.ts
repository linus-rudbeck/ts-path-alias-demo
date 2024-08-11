export function isDevelopment() {
    return true;
}

export function isProduction() {
    return !isDevelopment();
}
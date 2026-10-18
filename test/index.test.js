const {
    capitalizeWords,
    filterActiveUsers,
    logAction,
} = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('returns an empty string when given an empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles a single word', () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });
});

describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
        ]);
    });

    test('returns an empty array when no users are active', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false },
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns an empty array when given an empty array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });

    test('returns all users when all users are active', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: true },
        ];

        expect(filterActiveUsers(users)).toEqual(users);
    });
});

describe('logAction', () => {
    test('returns a correctly formatted log message', () => {
        const result = logAction('login', 'Alice');

        expect(result).toMatch(/^User Alice performed login at .+$/);
    });

    test('includes the username in the log message', () => {
        const result = logAction('logout', 'Bob');

        expect(result).toContain('User Bob');
    });

    test('includes the action in the log message', () => {
        const result = logAction('post', 'Alice');

        expect(result).toContain('performed post');
    });
});
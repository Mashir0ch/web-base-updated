export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male' && !('income' in data)) {
        data.income = 100000;
    }

    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const fields = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3),
    ];

    return [...new Set(fields)].sort();
}

export function objectClone(obj, count) {
    function deepClone(value) {
        if (value === null || typeof value !== 'object') {
            return value;
        }

        if (Array.isArray(value)) {
            return value.map(deepClone);
        }

        const copy = {};

        for (const key of Object.keys(value)) {
            copy[key] = deepClone(value[key]);
        }

        return copy;
    }

    const result = [];

    for (let id = 0; id < count; id++) {
        const copy = deepClone(obj);
        copy.id = id;
        result.push(copy);
    }

    return result;
}

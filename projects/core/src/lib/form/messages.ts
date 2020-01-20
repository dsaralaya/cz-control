
export const errorMessages = (key, messages, obj): string => {
    let min = obj.min;
    const max = obj.max;
    const label = obj.label;
    const value = obj.value;
    if (messages.length > 0) {
        const msg = messages.find((t) => t.key === key);
        if (msg) {
            if (min) {
                min = min - 1;
            }
            return msg.message.replace('{{label}}', label).replace('{{min}}', min).replace('{{max}}', max).replace('{{value}}', value);
        }

    }
    switch (key) {
        case 'required':
            return `${label} is required`;
        case 'email':
            return `Invalid Email Id`;
        case 'pattern':
            return `${label} is invalid`;
        case 'minlength':
            return 'Value must be N characters';
        case 'maxlength':
            return 'Value must be a maximum of N characters';
    }
}

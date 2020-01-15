
export const errorMessages = (label, key: string,messages): string => {
    if (messages.length > 0) {
        const msg = messages.find((t) => t.key === key);
        if (msg) {
            return msg.message;
        }

    }
    switch (key) {
            case 'required':
                return `${label} is required`;
            case 'pattern':
                return 'Value does not match required pattern';
            case 'minlength':
                return 'Value must be N characters';
            case 'maxlength':
                return 'Value must be a maximum of N characters';
        }
 }

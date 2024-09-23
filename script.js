function toggleTheme() {
    const body = document.body;
const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';

if (currentTheme === 'light') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
} else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
}
}

function generatePattern() {
    const patternType = document.getElementById('patternType').value;
    const length = parseInt(document.getElementById('length').value);
    let result = '';

    switch (patternType) {
        case 'pyramid1':
            result = pyramidPattern1(length);
            break;
        case 'pyramid2':
            result = pyramidPattern2(length);
            break;
        case 'alphabet':
            result = alphabetPattern(length);
            break;
        case 'incrementDecrement':
            result = incrementDecrementPattern(length);
            break;
        case 'reversePyramid':
            result = reversePyramidPattern(length);
            break;
    }
    
    document.getElementById('patternOutput').textContent = result;
}

function pyramidPattern1(n) {
    let output = '';
    for (let i = 1; i <= n; i++) {
        output += ' '.repeat(n - i) + Array.from({ length: i }, (_, j) => j + 1).join(' ') + '\n';
    }
    return output;
}

function pyramidPattern2(n) {
    let output = '';
    for ( let i = 1; i <= n; i++) {
        output += ' '.repeat(2 * (n - i)) + 
                  Array.from({ length: i }, (_, j) => j + 1).join(' ') + ' ' + 
                  Array.from({ length: i - 1 }, (_, j) => i - j - 1).join(' ') + '\n';
    }
    return output;
}

function alphabetPattern(n) {
    let output = '';
    for (let i = 1; i <= n; i++) {
        output += Array.from({ length: i }, (_, j) => String.fromCharCode(j + 65)).join(' ') + '\n';
    }
    for (let i = n - 1; i >= 1; i--) {
        output += Array.from({ length: i }, (_, j) => String.fromCharCode(j + 65)).join(' ') + '\n';
    }
    return output;
}

function incrementDecrementPattern(n) {
    let output = '';
    for (let i = n; i >= 1; i--) {
        output += Array.from({ length: i }, (_, j) => j + 1).join(' ') + '\n';
    }
    for (let i = 2; i <= n; i++) {
        output += Array.from({ length: i }, (_, j) => j + 1).join(' ') + '\n';
    }
    return output;
}

function reversePyramidPattern(n) {
    let output = '';
    for (let i = n; i >= 1; i--) {
        output += ' '.repeat(n - i) + Array.from({ length: i }, () => i).join(' ') + '\n';
    }
    return output;
}
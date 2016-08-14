const y = (f) => f(f);
const f = (g) => (n) => (n === 0 ? 1 : (n * (g(g)(n - 1))));

export default (x) => y(f)(x);

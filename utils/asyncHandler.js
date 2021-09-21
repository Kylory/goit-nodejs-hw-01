//Замість try catch можна використовувати таку ф-цію asyncHandler
//Вона буде повертати резолвнутий проміс в будь-якому випадку
//але якщо в оригінальній ф-ції (fn) буде error, то він вивететься в консоль
//Профіт від використання = не ставити всюди try catch

const asyncHandler = (fn) => {
  return Promise.resolve(fn).catch((error) => console.log(error.message));
};

module.exports = asyncHandler;

// (async () => {
//   await asyncHandler(someFunction());
// })();

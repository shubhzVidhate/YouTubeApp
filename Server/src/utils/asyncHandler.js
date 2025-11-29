// ASYNCHANDLER USING PROMISES

const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next))
    .catch((err) => {
      next(err);
    });
  };
};


export { asyncHandler };


// ASYNCHANDLER USING TRYCATCH BLOCK

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next());
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const catchAsyncError = (fun) => {
  return (req, res, next) => {
    fun(req, res, next)
      .then()
      .catch((err) => {
        return next(err);
      });
  };
};

module.exports = catchAsyncError;

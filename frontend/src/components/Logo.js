import React from "react";

const Logo = ({ w, h }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 500 500"
      version="1.1"
    >
      <path
        d="M 269.422 109.404 C 273.752 111.385, 279.772 117.792, 281.159 121.897 C 283.930 130.096, 282.023 138.994, 276.136 145.342 C 273.223 148.481, 267.070 151.969, 264.290 152.056 C 263.305 152.087, 266.030 153.386, 270.344 154.943 C 280.591 158.643, 291.017 165.861, 297.548 173.779 C 302.939 180.316, 308.560 190.528, 309.569 195.621 L 310.139 198.500 245.820 219.873 C 210.444 231.628, 181.118 241.596, 180.650 242.023 C 180.183 242.450, 181.410 242.800, 183.378 242.800 C 189.010 242.800, 195.337 246.491, 200.521 252.800 C 206.860 260.516, 214.744 267.032, 221.846 270.426 L 227.741 273.244 286.768 253.518 C 350.950 232.070, 350.836 232.121, 355.006 223.279 C 357.057 218.931, 357.209 217.509, 356.694 207.500 C 355.061 175.802, 339.068 146.284, 313.104 127.049 C 302.138 118.925, 282.477 110.440, 270.500 108.662 C 266.512 108.069, 266.508 108.072, 269.422 109.404 M 24.347 350.057 C 9.145 357.582, 9.332 385.235, 24.634 392.497 C 29.644 394.874, 39.365 394.893, 44.306 392.535 C 48.217 390.669, 52.270 386.143, 53.415 382.363 C 53.980 380.501, 53.603 380.172, 50.492 379.809 C 47.328 379.440, 46.687 379.770, 44.871 382.709 C 42.252 386.947, 39.902 388.167, 34.362 388.167 C 27.291 388.167, 22.513 383.938, 21.327 376.631 L 20.746 373.050 37.623 372.775 L 54.500 372.500 54.209 368.500 C 53.822 363.191, 52.142 358.120, 49.652 354.747 C 44.857 348.252, 32.588 345.978, 24.347 350.057 M 100.970 350.250 C 92.683 354.437, 88.746 364.737, 90.791 376.883 C 92.626 387.776, 99.862 394.225, 110.371 394.332 C 117.420 394.404, 122.593 391.712, 126.135 386.126 C 129.498 380.823, 129.827 378, 127.082 378 C 126.027 378, 124.494 377.743, 123.677 377.429 C 122.632 377.029, 121.994 377.750, 121.532 379.857 C 119.942 387.092, 111.408 390.539, 104.260 386.834 C 98.833 384.020, 96.043 369.620, 99.379 361.636 C 102.685 353.723, 112.423 351.269, 118.077 356.923 C 119.685 358.531, 121 360.608, 121 361.540 C 121 362.808, 121.565 363.082, 123.250 362.630 C 124.487 362.299, 126.063 362.021, 126.750 362.014 C 130.637 361.971, 125.556 352.796, 120.016 349.852 C 115.059 347.218, 106.623 347.394, 100.970 350.250 M 144.164 350.201 C 141.749 351.372, 138.760 353.916, 137.418 355.944 C 131.363 365.094, 132.559 382.906, 139.648 389.132 C 145.996 394.708, 156.273 395.982, 164.150 392.170 C 171.816 388.458, 175 382.193, 175 370.819 C 175 360.224, 171.620 353.918, 163.790 349.903 C 158.722 347.304, 149.864 347.438, 144.164 350.201 M 197.359 349.923 C 195.632 350.976, 193.918 352.324, 193.550 352.919 C 192.367 354.833, 191 354.072, 191 351.500 C 191 349.389, 190.533 349, 188 349 L 185 349 185 371.500 L 185 394 188.397 394 L 191.794 394 192.163 377.750 C 192.467 364.357, 192.839 361.044, 194.280 358.904 C 198.931 351.997, 208.961 352.601, 210.991 359.909 C 211.540 361.884, 211.991 370.391, 211.994 378.813 L 212 394.127 215.250 393.813 L 218.500 393.500 219 377.450 C 219.411 364.243, 219.819 360.914, 221.302 358.656 C 224.493 353.797, 230.951 352.600, 235.342 356.055 L 237.954 358.109 238.227 375.805 L 238.500 393.500 242 393.500 L 245.500 393.500 245.802 378.500 C 246.177 359.840, 245.617 355.722, 242.179 351.875 C 237.441 346.573, 226.785 346.648, 221.288 352.023 L 218.221 355.021 214.711 351.511 C 211.570 348.370, 210.636 348, 205.850 348.004 C 202.344 348.006, 199.417 348.668, 197.359 349.923 M 270.500 349.167 C 269.400 349.775, 267.488 351.190, 266.250 352.311 L 264 354.349 264 351.674 C 264 349.282, 263.629 349, 260.481 349 L 256.962 349 257.231 371.250 L 257.500 393.500 261 393.500 L 264.500 393.500 265 376.770 C 265.489 360.395, 265.555 359.985, 268.097 357.445 C 271.669 353.878, 277.685 353.116, 281.015 355.809 C 283.455 357.782, 283.509 358.140, 284 375.659 L 284.500 393.500 287.644 393.805 L 290.788 394.111 291.209 378.305 C 291.492 367.675, 292.082 361.575, 293.010 359.675 C 295.649 354.270, 303.651 352.279, 308.139 355.910 C 310.439 357.770, 310.508 358.283, 310.813 375.910 L 311.126 394 314.563 394 L 318 394 318 375.968 C 318 355.787, 317.200 352.189, 312.128 349.566 C 308.602 347.743, 300.834 347.504, 297.684 349.122 C 296.483 349.739, 294.303 351.360, 292.839 352.724 L 290.179 355.203 289.060 353.112 C 288.444 351.962, 286.626 350.341, 285.020 349.510 C 281.628 347.756, 273.402 347.562, 270.500 349.167 M 338.347 350.003 C 325.073 356.748, 323.206 381.191, 335.263 390.387 C 344.254 397.245, 359.410 395.177, 365.466 386.265 C 368.833 381.310, 368.670 380.297, 364.426 379.802 C 361.324 379.439, 360.662 379.754, 359.405 382.183 C 357.417 386.028, 353.648 388.273, 349.181 388.273 C 341.979 388.273, 336.453 383.565, 335.297 376.444 L 334.746 373.050 351.623 372.775 L 368.500 372.500 368.194 367.500 C 367.768 360.549, 364.585 354.415, 359.739 351.209 C 354.167 347.521, 344.322 346.966, 338.347 350.003 M 389.837 349.250 C 388.988 349.938, 387.552 351.613, 386.646 352.973 L 385 355.445 385 352.223 C 385 349.203, 384.778 349, 381.481 349 L 377.962 349 378.231 371.250 L 378.500 393.500 382 393.500 L 385.500 393.500 386 377.451 C 386.407 364.390, 386.828 360.902, 388.263 358.717 C 390.351 355.536, 393.583 354.511, 397.193 355.883 C 399.561 356.784, 399.928 356.588, 401.081 353.805 C 402.207 351.086, 402.138 350.574, 400.486 349.366 C 398.148 347.657, 391.891 347.589, 389.837 349.250 M 418.367 348.690 C 414.222 349.503, 408.243 355.752, 406.453 361.142 C 404.015 368.481, 404.824 379.317, 408.245 385.155 C 414.478 395.791, 430.409 397.714, 438.702 388.831 C 440.783 386.603, 444.474 379.126, 443.809 378.487 C 443.639 378.324, 441.958 378.035, 440.073 377.845 C 437.026 377.538, 436.561 377.817, 435.881 380.357 C 434.195 386.652, 427.766 389.877, 421.255 387.694 C 416.576 386.126, 413.923 382.375, 412.864 375.828 C 410.862 363.451, 416.252 354, 425.312 354 C 430.323 354, 433.260 355.800, 434.965 359.915 C 436.067 362.575, 436.556 362.842, 439.352 362.311 C 441.084 361.982, 442.711 361.528, 442.970 361.303 C 443.228 361.078, 442.415 358.960, 441.161 356.598 C 437.317 349.351, 429.259 346.556, 418.367 348.690 M 460.500 349.334 C 455.201 351.741, 450.312 358.178, 449.007 364.468 C 445.920 379.338, 452.430 391.639, 464.596 393.924 C 474.097 395.707, 482.661 392.521, 486.929 385.614 C 489.758 381.038, 489.563 380.285, 485.426 379.802 C 482.324 379.439, 481.662 379.754, 480.405 382.183 C 478.320 386.216, 474.543 388.325, 469.540 388.249 C 462.539 388.144, 457.836 383.971, 456.461 376.646 L 455.777 373 473.018 373 L 490.258 373 489.577 367.750 C 487.946 355.162, 481.552 348.761, 470.111 348.261 C 466.065 348.084, 462.336 348.501, 460.500 349.334 M 28.096 355.265 C 25.130 356.789, 22.303 360.603, 21.437 364.250 L 20.783 367 33.959 367 C 46.657 367, 47.114 366.928, 46.567 365 C 46.255 363.900, 45.751 362.120, 45.447 361.044 C 45.142 359.968, 43.533 357.943, 41.870 356.544 C 38.484 353.695, 32.273 353.118, 28.096 355.265 M 147.401 355.897 C 138.986 361.028, 139.017 381.034, 147.449 386.558 C 153.005 390.199, 162.536 387.733, 165.567 381.871 C 167.740 377.669, 168.462 369.394, 167.096 364.341 C 165.487 358.389, 160.229 353.999, 154.715 354.004 C 152.348 354.006, 149.141 354.836, 147.401 355.897 M 341.893 355.497 C 338.884 357.132, 336.607 360.319, 335.639 364.250 L 334.962 367 348.048 367 C 360.657 367, 361.114 366.927, 360.567 365 C 360.255 363.900, 359.751 362.120, 359.447 361.044 C 359.142 359.968, 357.533 357.943, 355.870 356.544 C 352.394 353.619, 346.202 353.155, 341.893 355.497 M 462.893 355.497 C 459.884 357.132, 457.607 360.319, 456.639 364.250 L 455.962 367 468.981 367 C 477.264 367, 482 366.625, 482 365.968 C 482 363.466, 479.012 358.154, 476.486 356.168 C 473.262 353.632, 466.902 353.318, 462.893 355.497 M 61 371.250 L 61 375 72.560 375 L 84.121 375 83.810 371.390 L 83.500 367.780 72.250 367.640 L 61 367.500 61 371.250"
        stroke="none"
        fill="#0e46a6"
        fillRule="evenodd"
      />
      <path
        d="M 228.500 108.032 C 184.970 117.179, 152.881 149.324, 143.404 193.275 C 141.081 204.047, 141.042 221.312, 143.326 227.232 C 146.925 236.559, 157.728 242.994, 167.532 241.651 C 173.302 240.860, 177.025 238.905, 181.463 234.335 C 185.980 229.684, 187.997 222.982, 188.012 212.568 C 188.018 208.131, 188.682 202.025, 189.485 199 C 195.090 177.913, 213.017 159.977, 234 154.462 C 240.612 152.724, 256.290 152.125, 263 153.354 C 265.544 153.820, 265.954 153.742, 264.500 153.068 C 262.728 152.246, 262.704 152.133, 264.290 152.070 C 269.400 151.870, 277.199 145.599, 280.547 139 C 282.746 134.666, 282.853 125.795, 280.763 121 C 278.857 116.624, 273.374 111.030, 269.751 109.765 C 268.239 109.237, 267.216 108.459, 267.478 108.035 C 269.090 105.428, 240.906 105.425, 228.500 108.032 M 293.083 115.377 C 294.106 116.303, 302 119.989, 302 119.541 C 302 118.972, 294.453 115, 293.373 115 C 292.985 115, 292.854 115.170, 293.083 115.377 M 321 133.500 C 322.866 135.425, 324.617 137, 324.892 137 C 325.167 137, 323.866 135.425, 322 133.500 C 320.134 131.575, 318.383 130, 318.108 130 C 317.833 130, 319.134 131.575, 321 133.500 M 329.500 142 C 331.648 144.200, 333.631 146, 333.906 146 C 334.181 146, 332.648 144.200, 330.500 142 C 328.352 139.800, 326.369 138, 326.094 138 C 325.819 138, 327.352 139.800, 329.500 142 M 273.083 156.377 C 274.106 157.303, 282 160.989, 282 160.541 C 282 159.972, 274.453 156, 273.373 156 C 272.985 156, 272.854 156.170, 273.083 156.377 M 293 169.500 C 294.866 171.425, 296.617 173, 296.892 173 C 297.167 173, 295.866 171.425, 294 169.500 C 292.134 167.575, 290.383 166, 290.108 166 C 289.833 166, 291.134 167.575, 293 169.500 M 357.343 211.500 C 357.346 215.900, 357.522 217.576, 357.733 215.224 C 357.945 212.872, 357.942 209.272, 357.727 207.224 C 357.512 205.176, 357.339 207.100, 357.343 211.500 M 174.744 242.832 C 164.097 246.587, 158.574 254.158, 158.574 265 C 158.574 273.479, 160.668 277.403, 171.035 288.356 C 184.864 302.965, 197.883 311.370, 216 317.383 C 233.213 323.096, 252.601 324.727, 260.522 321.129 C 269.086 317.238, 274.347 309.177, 274.310 300 C 274.284 293.345, 272.371 288.525, 268.037 284.191 C 262.962 279.116, 259.335 277.729, 249 276.913 C 237.296 275.989, 229.260 274.126, 231.167 272.779 C 232.071 272.141, 231.617 272.031, 229.756 272.437 C 223.967 273.699, 210 264.316, 200.526 252.800 C 195.368 246.529, 189.011 242.800, 183.480 242.800 C 181.569 242.800, 180.256 242.395, 180.562 241.900 C 181.305 240.698, 180.372 240.847, 174.744 242.832 M 312.188 244.683 C 309.816 245.522, 308.052 246.385, 308.268 246.601 C 308.484 246.817, 311.099 246.128, 314.080 245.070 C 317.061 244.012, 318.825 243.149, 318 243.152 C 317.175 243.155, 314.559 243.844, 312.188 244.683 M 31.250 347.716 C 32.763 347.945, 35.237 347.945, 36.750 347.716 C 38.263 347.487, 37.025 347.300, 34 347.300 C 30.975 347.300, 29.738 347.487, 31.250 347.716 M 108.250 347.716 C 109.763 347.945, 112.237 347.945, 113.750 347.716 C 115.263 347.487, 114.025 347.300, 111 347.300 C 107.975 347.300, 106.737 347.487, 108.250 347.716 M 151.250 347.716 C 152.762 347.945, 155.238 347.945, 156.750 347.716 C 158.262 347.487, 157.025 347.300, 154 347.300 C 150.975 347.300, 149.738 347.487, 151.250 347.716 M 202.750 347.706 C 203.988 347.944, 206.012 347.944, 207.250 347.706 C 208.488 347.467, 207.475 347.272, 205 347.272 C 202.525 347.272, 201.512 347.467, 202.750 347.706 M 229.750 347.706 C 230.988 347.944, 233.012 347.944, 234.250 347.706 C 235.488 347.467, 234.475 347.272, 232 347.272 C 229.525 347.272, 228.512 347.467, 229.750 347.706 M 275.264 347.718 C 276.784 347.947, 279.034 347.941, 280.264 347.704 C 281.494 347.467, 280.250 347.279, 277.500 347.286 C 274.750 347.294, 273.744 347.488, 275.264 347.718 M 302.264 347.718 C 303.784 347.947, 306.034 347.941, 307.264 347.704 C 308.494 347.467, 307.250 347.279, 304.500 347.286 C 301.750 347.294, 300.744 347.488, 302.264 347.718 M 345.250 347.716 C 346.762 347.945, 349.238 347.945, 350.750 347.716 C 352.262 347.487, 351.025 347.300, 348 347.300 C 344.975 347.300, 343.738 347.487, 345.250 347.716 M 393.250 347.689 C 394.212 347.941, 395.788 347.941, 396.750 347.689 C 397.712 347.438, 396.925 347.232, 395 347.232 C 393.075 347.232, 392.288 347.438, 393.250 347.689 M 423.264 347.718 C 424.784 347.947, 427.034 347.941, 428.264 347.704 C 429.494 347.467, 428.250 347.279, 425.500 347.286 C 422.750 347.294, 421.744 347.488, 423.264 347.718 M 466.250 347.716 C 467.762 347.945, 470.238 347.945, 471.750 347.716 C 473.262 347.487, 472.025 347.300, 469 347.300 C 465.975 347.300, 464.738 347.487, 466.250 347.716 M 163.500 349.659 C 165.150 350.527, 167.848 352.422, 169.496 353.869 L 172.493 356.500 169.996 353.655 C 167.610 350.935, 162.994 347.955, 161.300 348.040 C 160.860 348.062, 161.850 348.791, 163.500 349.659 M 184.230 371.250 L 184.461 394.500 184.749 371.750 L 185.038 349 188.019 349 C 190.532 349, 191 349.392, 191 351.500 C 191 354.072, 192.367 354.833, 193.550 352.919 C 193.918 352.324, 195.632 350.976, 197.359 349.923 C 199.087 348.869, 199.972 348.006, 199.327 348.004 C 198.681 348.002, 196.769 349.165, 195.077 350.589 L 192 353.178 192 350.589 C 192 348.235, 191.637 348, 188 348 L 184 348 184.230 371.250 M 256.459 349.067 C 256.096 349.653, 256.070 350.403, 256.400 350.733 C 256.730 351.063, 257 350.808, 257 350.167 C 257 349.500, 258.500 349, 260.500 349 C 263.890 349, 264.722 350.050, 264.044 353.472 C 263.939 354.007, 264.785 353.599, 265.926 352.567 C 268.221 350.490, 268.807 349.085, 266.622 350.899 C 265.540 351.797, 265.131 351.609, 264.716 350.021 C 264.311 348.474, 263.359 348, 260.653 348 C 258.709 348, 256.821 348.480, 256.459 349.067 M 379.762 348.707 C 381.006 348.946, 382.806 348.937, 383.762 348.687 C 384.718 348.437, 383.700 348.241, 381.500 348.252 C 379.300 348.263, 378.518 348.468, 379.762 348.707 M 400.750 349.792 C 401.712 350.777, 402.667 351.175, 402.872 350.676 C 403.076 350.177, 402.626 349.378, 401.872 348.900 C 399.534 347.419, 398.914 347.912, 400.750 349.792 M 120 349.277 C 120 349.468, 121.463 350.695, 123.250 352.003 C 125.261 353.475, 125.960 353.717, 125.082 352.637 C 123.751 350.997, 120 348.517, 120 349.277 M 215.004 351.500 C 216.377 353.150, 217.620 354.695, 217.767 354.933 C 217.913 355.172, 218.480 354.838, 219.025 354.192 C 219.570 353.545, 219.707 353.244, 219.328 353.522 C 218.949 353.800, 217.259 352.784, 215.573 351.264 L 212.507 348.500 215.004 351.500 M 411.689 352.250 C 408.575 355.334, 408.563 355.373, 411.454 353.008 C 413.129 351.637, 414.928 350.175, 415.450 349.758 C 415.972 349.341, 416.078 349, 415.685 349 C 415.292 349, 413.494 350.462, 411.689 352.250 M 292.521 351.976 C 291.538 353.063, 290.273 353.669, 289.712 353.322 C 289.105 352.947, 288.999 353.189, 289.451 353.921 C 290.010 354.825, 290.845 354.555, 292.605 352.901 C 293.922 351.664, 295 350.505, 295 350.326 C 295 349.585, 294.209 350.111, 292.521 351.976 M 453.946 353.750 L 450.500 357.500 454.250 354.054 C 456.313 352.158, 458 350.471, 458 350.304 C 458 349.540, 457.154 350.260, 453.946 353.750 M 440.638 355.500 C 442.950 359.448, 443 359.507, 443 358.277 C 443 357.697, 442.073 356.159, 440.941 354.861 L 438.881 352.500 440.638 355.500 M 37.999 355.123 C 39.374 355.672, 41.421 356.881, 42.548 357.810 C 43.674 358.740, 43.330 358.262, 41.782 356.750 C 40.235 355.238, 38.188 354.029, 37.234 354.063 C 36.040 354.107, 36.279 354.437, 37.999 355.123 M 103.218 356.750 C 101.670 358.262, 101.326 358.740, 102.452 357.810 C 103.579 356.881, 105.626 355.672, 107.001 355.123 C 108.721 354.437, 108.960 354.107, 107.766 354.063 C 106.812 354.029, 104.765 355.238, 103.218 356.750 M 201.250 354.689 C 202.213 354.941, 203.787 354.941, 204.750 354.689 C 205.713 354.438, 204.925 354.232, 203 354.232 C 201.075 354.232, 200.287 354.438, 201.250 354.689 M 228.250 354.689 C 229.213 354.941, 230.787 354.941, 231.750 354.689 C 232.713 354.438, 231.925 354.232, 230 354.232 C 228.075 354.232, 227.287 354.438, 228.250 354.689 M 274.250 354.689 C 275.212 354.941, 276.788 354.941, 277.750 354.689 C 278.712 354.438, 277.925 354.232, 276 354.232 C 274.075 354.232, 273.288 354.438, 274.250 354.689 M 302.894 354.961 C 305.362 355.361, 307.882 356.486, 308.644 357.527 C 309.390 358.548, 310 358.872, 310 358.248 C 310 356.241, 305.659 353.996, 302.027 354.125 C 298.633 354.246, 298.666 354.277, 302.894 354.961 M 351.999 355.123 C 353.374 355.672, 355.421 356.881, 356.548 357.810 C 357.674 358.740, 357.330 358.262, 355.782 356.750 C 354.235 355.238, 352.188 354.029, 351.234 354.063 C 350.040 354.107, 350.279 354.437, 351.999 355.123 M 428.946 355.104 C 430.292 355.641, 431.888 356.400, 432.493 356.790 C 433.099 357.181, 432.736 356.712, 431.686 355.750 C 430.637 354.788, 429.041 354.029, 428.139 354.063 C 427.103 354.103, 427.400 354.486, 428.946 355.104 M 24.589 358.077 C 23.165 359.769, 22.002 361.681, 22.004 362.327 C 22.006 362.972, 22.875 362.077, 23.936 360.338 C 24.996 358.599, 26.682 356.700, 27.682 356.118 C 28.682 355.537, 28.978 355.047, 28.339 355.030 C 27.700 355.014, 26.013 356.385, 24.589 358.077 M 235.147 356.500 C 236.052 357.600, 237.013 359.400, 237.281 360.500 C 237.749 362.424, 237.772 362.420, 237.884 360.405 C 237.948 359.253, 236.988 357.453, 235.750 356.405 C 233.518 354.516, 233.514 354.516, 235.147 356.500 M 268.004 357.496 C 266.714 358.869, 265.848 360.120, 266.079 360.277 C 266.311 360.434, 267.709 359.311, 269.186 357.781 C 270.664 356.251, 271.530 355, 271.111 355 C 270.691 355, 269.293 356.123, 268.004 357.496 M 390.314 356.750 C 389.264 357.712, 388.961 358.131, 389.639 357.681 C 390.317 357.230, 392.138 356.481, 393.686 356.017 C 395.968 355.332, 396.096 355.156, 394.361 355.086 C 393.184 355.039, 391.363 355.788, 390.314 356.750 M 318.415 376 C 318.415 386.175, 318.564 390.337, 318.745 385.250 C 318.927 380.162, 318.927 371.837, 318.745 366.750 C 318.564 361.662, 318.415 365.825, 318.415 376 M 128 360.264 C 128 361.142, 126.987 362.056, 125.750 362.294 L 123.500 362.728 125.781 362.864 C 127.979 362.995, 129.906 360.573, 128.624 359.290 C 128.281 358.947, 128 359.385, 128 360.264 M 164.810 360.500 C 165.316 361.600, 165.980 363.175, 166.286 364 C 166.766 365.296, 166.853 365.288, 166.921 363.941 C 166.964 363.084, 166.300 361.509, 165.445 360.441 C 163.915 358.531, 163.904 358.532, 164.810 360.500 M 283.193 375.691 C 283.087 385.146, 283.337 393.092, 283.750 393.348 C 284.163 393.605, 284.382 388.569, 284.238 382.157 C 283.755 360.649, 283.387 358.371, 283.193 375.691 M 256.232 363 C 256.232 364.925, 256.438 365.712, 256.689 364.750 C 256.941 363.788, 256.941 362.212, 256.689 361.250 C 256.438 360.288, 256.232 361.075, 256.232 363 M 310.411 377 C 310.411 386.625, 310.561 390.563, 310.745 385.750 C 310.928 380.938, 310.928 373.063, 310.745 368.250 C 310.561 363.438, 310.411 367.375, 310.411 377 M 443 360.833 C 443 361.475, 441.762 362.061, 440.250 362.136 C 437.726 362.261, 437.694 362.309, 439.865 362.721 C 442.298 363.182, 444.900 361.567, 443.683 360.350 C 443.308 359.974, 443 360.192, 443 360.833 M 211.407 378 C 211.407 387.075, 211.559 390.788, 211.744 386.250 C 211.929 381.712, 211.929 374.288, 211.744 369.750 C 211.559 365.212, 211.407 368.925, 211.407 378 M 218.798 378.001 C 218.634 386.802, 218.838 394.002, 219.250 394.001 C 219.662 394.001, 220 386.800, 220 378 C 220 369.200, 219.796 362, 219.548 362 C 219.299 362, 218.962 369.201, 218.798 378.001 M 21.015 365.250 C 21.002 366.828, 22.280 367, 34 367 C 41.150 367, 47.001 366.663, 47.002 366.250 C 47.003 365.837, 41.534 365.640, 34.849 365.811 C 25.640 366.047, 22.492 365.805, 21.862 364.811 C 21.237 363.825, 21.027 363.933, 21.015 365.250 M 98.232 367 C 98.232 368.925, 98.438 369.712, 98.689 368.750 C 98.941 367.788, 98.941 366.212, 98.689 365.250 C 98.438 364.288, 98.232 365.075, 98.232 367 M 175.336 371 C 175.336 375.125, 175.513 376.813, 175.728 374.750 C 175.944 372.688, 175.944 369.313, 175.728 367.250 C 175.513 365.188, 175.336 366.875, 175.336 371 M 481 365.057 C 481 365.760, 476.810 366.011, 468.498 365.807 C 461.622 365.638, 455.997 365.837, 455.998 366.250 C 455.999 366.663, 461.850 367, 469 367 C 479.889 367, 482 366.756, 482 365.500 C 482 364.675, 481.775 364, 481.500 364 C 481.225 364, 481 364.476, 481 365.057 M 141.320 371 C 141.320 374.575, 141.502 376.038, 141.723 374.250 C 141.945 372.462, 141.945 369.538, 141.723 367.750 C 141.502 365.962, 141.320 367.425, 141.320 371 M 192.400 379.500 C 192.401 387.750, 192.556 390.992, 192.744 386.704 C 192.932 382.417, 192.931 375.667, 192.742 371.704 C 192.552 367.742, 192.399 371.250, 192.400 379.500 M 335 366.250 C 335 366.663, 340.850 367, 348 367 C 355.150 367, 361 366.663, 361 366.250 C 361 365.837, 355.150 365.500, 348 365.500 C 340.850 365.500, 335 365.837, 335 366.250 M 167.300 371 C 167.300 374.025, 167.487 375.262, 167.716 373.750 C 167.945 372.238, 167.945 369.762, 167.716 368.250 C 167.487 366.738, 167.300 367.975, 167.300 371 M 291.397 380 C 291.397 387.975, 291.553 391.238, 291.743 387.250 C 291.932 383.262, 291.932 376.738, 291.743 372.750 C 291.553 368.762, 291.397 372.025, 291.397 380 M 404.300 371 C 404.300 374.025, 404.487 375.262, 404.716 373.750 C 404.945 372.238, 404.945 369.762, 404.716 368.250 C 404.487 366.738, 404.300 367.975, 404.300 371 M 60.402 371.243 L 60.500 375.500 72.500 375.500 L 84.500 375.500 84.823 372.123 C 85 370.265, 84.765 368.365, 84.299 367.899 C 83.833 367.433, 83.623 368.840, 83.831 371.026 L 84.210 375 72.663 375 L 61.115 375 60.709 370.993 L 60.304 366.985 60.402 371.243 M 67.250 367.735 C 69.862 367.941, 74.138 367.941, 76.750 367.735 C 79.362 367.529, 77.225 367.360, 72 367.360 C 66.775 367.360, 64.638 367.529, 67.250 367.735 M 37.750 372.748 L 21 373.048 21.136 375.774 C 21.254 378.132, 21.331 378.196, 21.706 376.250 C 22.134 374.026, 22.326 374, 38.570 374 C 48.857 374, 55 373.626, 55 373 C 55 372.450, 54.888 372.101, 54.750 372.224 C 54.612 372.347, 46.963 372.583, 37.750 372.748 M 98.232 375 C 98.232 376.925, 98.438 377.712, 98.689 376.750 C 98.941 375.788, 98.941 374.212, 98.689 373.250 C 98.438 372.288, 98.232 373.075, 98.232 375 M 351.750 372.748 L 335 373.048 335.136 375.774 C 335.254 378.132, 335.331 378.196, 335.706 376.250 C 336.134 374.026, 336.326 374, 352.570 374 C 362.857 374, 369 373.626, 369 373 C 369 372.450, 368.887 372.101, 368.750 372.224 C 368.613 372.347, 360.962 372.583, 351.750 372.748 M 456.116 375.250 C 456.201 376.905, 456.352 377.044, 456.685 375.774 C 457.087 374.242, 459.012 374.014, 473.819 373.748 L 490.500 373.448 473.250 373.224 L 456 373 456.116 375.250 M 126.688 377.714 C 127.892 377.938, 129.084 378.778, 129.337 379.580 C 129.628 380.505, 129.739 380.392, 129.640 379.270 C 129.538 378.122, 128.607 377.466, 126.991 377.404 C 124.939 377.324, 124.886 377.379, 126.688 377.714 M 164.421 381.637 C 163.277 383.985, 162.718 385.674, 163.178 385.390 C 164.365 384.657, 167.183 379.013, 166.811 378.116 C 166.640 377.704, 165.564 379.288, 164.421 381.637 M 439.250 377.689 C 440.212 377.941, 441.788 377.941, 442.750 377.689 C 443.712 377.438, 442.925 377.232, 441 377.232 C 439.075 377.232, 438.288 377.438, 439.250 377.689 M 22.004 379.850 C 21.998 381.877, 28.531 388.006, 30.650 387.961 C 31.838 387.936, 31.345 387.419, 29.270 386.517 C 27.493 385.745, 25.132 383.625, 24.023 381.807 C 22.915 379.988, 22.006 379.108, 22.004 379.850 M 50.796 379.727 C 53.628 380.076, 54.009 380.441, 53.498 382.317 C 52.978 384.230, 53.041 384.283, 54.006 382.742 C 55.570 380.248, 54.391 378.974, 50.691 379.160 L 47.500 379.320 50.796 379.727 M 358.513 381.975 C 357.667 383.611, 355.743 385.618, 354.237 386.435 C 352.732 387.252, 351.962 387.938, 352.527 387.960 C 354.380 388.032, 357.982 384.936, 359.531 381.939 C 360.367 380.323, 360.826 379, 360.551 379 C 360.276 379, 359.359 380.339, 358.513 381.975 M 364.497 379.699 C 366.145 379.964, 367.867 380.702, 368.323 381.340 C 368.883 382.123, 369.021 382.013, 368.749 381 C 368.501 380.077, 367.030 379.446, 364.923 379.359 C 361.787 379.230, 361.751 379.259, 364.497 379.699 M 435 380.365 C 435 381.116, 434.056 383.028, 432.902 384.615 L 430.805 387.500 433.402 384.694 C 435.700 382.212, 436.883 379, 435.500 379 C 435.225 379, 435 379.614, 435 380.365 M 485.497 379.699 C 487.145 379.964, 488.867 380.702, 489.323 381.340 C 489.883 382.123, 490.021 382.013, 489.749 381 C 489.501 380.077, 488.030 379.446, 485.923 379.359 C 482.787 379.230, 482.751 379.259, 485.497 379.699 M 406 382.723 C 406 383.303, 406.927 384.841, 408.059 386.139 L 410.119 388.500 408.362 385.500 C 406.050 381.552, 406 381.493, 406 382.723 M 146.757 385.750 C 148.052 386.988, 149.649 387.986, 150.306 387.970 C 150.963 387.953, 150.600 387.440, 149.500 386.830 C 148.400 386.219, 146.803 385.221, 145.951 384.610 C 145.099 384, 145.462 384.512, 146.757 385.750 M 442 383.799 C 442 384.421, 440.554 386.634, 438.787 388.715 C 435.907 392.108, 435.864 392.241, 438.379 390 C 441.543 387.180, 443.449 384.116, 442.581 383.248 C 442.261 382.928, 442 383.176, 442 383.799 M 476.102 385.586 C 474.233 386.914, 473.196 388, 473.796 388 C 474.397 388, 476.151 386.889, 477.694 385.532 C 481.228 382.423, 480.520 382.447, 476.102 385.586 M 40.500 386.068 C 38.850 387.125, 38.013 387.992, 38.639 387.995 C 39.266 387.998, 40.841 387.115, 42.139 386.033 C 45.112 383.556, 44.397 383.572, 40.500 386.068 M 92.786 385.500 C 93.353 386.600, 95.095 388.623, 96.658 389.996 L 99.500 392.493 96.508 388.996 C 91.766 383.456, 91.701 383.395, 92.786 385.500 M 484.997 388.250 C 483.525 390.261, 483.283 390.960, 484.363 390.082 C 486.003 388.751, 488.483 385, 487.723 385 C 487.532 385, 486.305 386.462, 484.997 388.250 M 18.496 388.843 C 19.586 390.131, 21.383 391.649, 22.489 392.215 C 24.613 393.303, 24.303 392.967, 19.507 388.985 C 16.620 386.588, 16.584 386.583, 18.496 388.843"
        stroke="none"
        fill="#09caf9"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Logo;

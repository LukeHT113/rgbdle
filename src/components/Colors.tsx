type Color = {
  red: number;
  green: number;
  blue: number;
}
const colors: Color[] = [
  {red: 98, green: 187, blue: 227},
  {red: 58, green: 95, blue: 243},
  {red: 65, green: 222, blue: 51},
  {red: 130, green: 224, blue: 181},
  {red: 243, green: 248, blue: 149},
  {red: 131, green: 23, blue: 8},
  {red: 152, green: 142, blue: 223},
  {red: 210, green: 243, blue: 144},
  {red: 2, green: 111, blue: 112},
  {red: 1, green: 117, blue: 80},
  {red: 116, green: 52, blue: 33},
  {red: 192, green: 46, blue: 141},
  {red: 166, green: 234, blue: 51},
  {red: 227, green: 82, blue: 65},
  {red: 152, green: 106, blue: 106},
  {red: 52, green: 169, blue: 126},
  {red: 186, green: 47, blue: 87},
  {red: 229, green: 100, blue: 167},
  {red: 4, green: 197, blue: 207},
  {red: 203, green: 227, blue: 132},
  {red: 109, green: 195, blue: 107},
  {red: 238, green: 49, blue: 149},
  {red: 175, green: 98, blue: 172},
  {red: 71, green: 119, blue: 101},
  {red: 200, green: 57, blue: 67},
  {red: 47, green: 11, blue: 30},
  {red: 114, green: 126, blue: 122},
  {red: 74, green: 167, blue: 196},
  {red: 63, green: 154, blue: 36},
  {red: 252, green: 133, blue: 62},
  {red: 115, green: 127, blue: 195},
  {red: 39, green: 38, blue: 138},
  {red: 16, green: 106, blue: 82},
  {red: 37, green: 3, blue: 144},
  {red: 255, green: 167, blue: 45},
  {red: 203, green: 110, blue: 177},
  {red: 144, green: 152, blue: 246},
  {red: 146, green: 128, blue: 206},
  {red: 3, green: 116, blue: 170},
  {red: 213, green: 199, blue: 137},
  {red: 228, green: 52, blue: 146},
  {red: 172, green: 146, blue: 40},
  {red: 66, green: 10, blue: 118},
  {red: 208, green: 106, blue: 33},
  {red: 46, green: 109, blue: 214},
  {red: 23, green: 59, blue: 100},
  {red: 162, green: 10, blue: 104},
  {red: 14, green: 212, blue: 153},
  {red: 102, green: 173, blue: 37},
  {red: 137, green: 135, blue: 148},
  {red: 221, green: 11, blue: 118},
  {red: 6, green: 153, blue: 32},
  {red: 174, green: 107, blue: 72},
  {red: 69, green: 162, blue: 231},
  {red: 75, green: 21, blue: 69},
  {red: 44, green: 189, blue: 51},
  {red: 157, green: 245, blue: 38},
  {red: 66, green: 173, blue: 156},
  {red: 115, green: 191, blue: 149},
  {red: 195, green: 142, blue: 194},
  {red: 223, green: 202, blue: 154},
  {red: 22, green: 51, blue: 209},
  {red: 95, green: 248, blue: 236},
  {red: 129, green: 90, blue: 231},
  {red: 196, green: 135, blue: 128},
  {red: 148, green: 180, blue: 105},
  {red: 174, green: 49, blue: 184},
  {red: 146, green: 159, blue: 218},
  {red: 225, green: 145, blue: 69},
  {red: 72, green: 204, blue: 228},
  {red: 151, green: 109, blue: 137},
  {red: 209, green: 100, blue: 72},
  {red: 87, green: 82, blue: 124},
  {red: 58, green: 190, blue: 165},
  {red: 148, green: 196, blue: 145},
  {red: 154, green: 202, blue: 1},
  {red: 58, green: 140, blue: 113},
  {red: 108, green: 87, blue: 81},
  {red: 99, green: 43, blue: 152},
  {red: 134, green: 41, blue: 234},
  {red: 193, green: 194, blue: 223},
  {red: 223, green: 33, blue: 225},
  {red: 178, green: 51, blue: 13},
  {red: 191, green: 163, blue: 167},
  {red: 34, green: 55, blue: 231},
  {red: 60, green: 249, blue: 221},
  {red: 196, green: 212, blue: 177},
  {red: 89, green: 229, blue: 22},
  {red: 120, green: 165, blue: 220},
  {red: 253, green: 175, blue: 76},
  {red: 50, green: 96, blue: 209},
  {red: 148, green: 119, blue: 129},
  {red: 27, green: 177, blue: 39},
  {red: 166, green: 100, blue: 202},
  {red: 26, green: 126, blue: 153},
  {red: 76, green: 100, blue: 5},
  {red: 251, green: 225, blue: 177},
  {red: 85, green: 181, blue: 171},
  {red: 127, green: 159, blue: 110},
  {red: 17, green: 29, blue: 207},
  {red: 111, green: 156, blue: 59},
  {red: 164, green: 70, blue: 127},
  {red: 103, green: 226, blue: 231},
  {red: 105, green: 36, blue: 143},
  {red: 34, green: 61, blue: 182},
  {red: 54, green: 248, blue: 190},
  {red: 86, green: 248, blue: 183},
  {red: 113, green: 166, blue: 98},
  {red: 223, green: 199, blue: 112},
  {red: 104, green: 161, blue: 180},
  {red: 54, green: 232, blue: 192},
  {red: 149, green: 166, blue: 36},
  {red: 159, green: 229, blue: 114},
  {red: 23, green: 204, blue: 184},
  {red: 45, green: 33, blue: 118},
  {red: 217, green: 159, blue: 39},
  {red: 34, green: 105, blue: 43},
  {red: 51, green: 213, blue: 192},
  {red: 255, green: 241, blue: 156},
  {red: 100, green: 23, blue: 29},
  {red: 31, green: 27, blue: 95},
  {red: 36, green: 220, blue: 232},
  {red: 99, green: 9, blue: 151},
  {red: 51, green: 232, blue: 65},
  {red: 125, green: 0, blue: 8},
  {red: 226, green: 13, blue: 218},
  {red: 173, green: 180, blue: 29},
  {red: 224, green: 43, blue: 41},
  {red: 241, green: 183, blue: 155},
  {red: 178, green: 25, blue: 82},
  {red: 80, green: 144, blue: 67},
  {red: 64, green: 140, blue: 193},
  {red: 193, green: 9, blue: 166},
  {red: 104, green: 129, blue: 177},
  {red: 90, green: 124, blue: 44},
  {red: 226, green: 234, blue: 44},
  {red: 39, green: 2, blue: 64},
  {red: 43, green: 138, blue: 132},
  {red: 53, green: 244, blue: 178},
  {red: 198, green: 210, blue: 198},
  {red: 74, green: 167, blue: 193},
  {red: 254, green: 123, blue: 60},
  {red: 101, green: 139, blue: 60},
  {red: 145, green: 246, blue: 99},
  {red: 127, green: 200, blue: 222},
  {red: 75, green: 113, blue: 165},
  {red: 25, green: 211, blue: 110},
  {red: 68, green: 204, blue: 33},
  {red: 20, green: 192, blue: 45},
  {red: 136, green: 174, blue: 80},
  {red: 169, green: 200, blue: 186},
  {red: 90, green: 232, blue: 121},
  {red: 140, green: 179, blue: 143},
  {red: 166, green: 164, blue: 111},
  {red: 218, green: 72, blue: 184},
  {red: 219, green: 252, blue: 186},
  {red: 56, green: 253, blue: 126},
  {red: 76, green: 122, blue: 71},
  {red: 222, green: 24, blue: 241},
  {red: 110, green: 243, blue: 224},
  {red: 5, green: 133, blue: 139},
  {red: 139, green: 176, blue: 196},
  {red: 92, green: 255, blue: 102},
  {red: 193, green: 244, blue: 68},
  {red: 212, green: 169, blue: 93},
  {red: 208, green: 26, blue: 33},
  {red: 56, green: 160, blue: 199},
  {red: 242, green: 235, blue: 29},
  {red: 59, green: 32, blue: 94},
  {red: 114, green: 141, blue: 175},
  {red: 223, green: 20, blue: 15},
  {red: 194, green: 6, blue: 83},
  {red: 162, green: 244, blue: 22},
  {red: 7, green: 206, blue: 90},
  {red: 225, green: 207, blue: 60},
  {red: 87, green: 182, blue: 232},
  {red: 93, green: 248, blue: 97},
  {red: 63, green: 196, blue: 239},
  {red: 140, green: 175, blue: 51},
  {red: 108, green: 230, blue: 215},
  {red: 233, green: 55, blue: 42},
  {red: 244, green: 63, blue: 22},
  {red: 133, green: 5, blue: 149},
  {red: 109, green: 186, blue: 128},
  {red: 239, green: 63, blue: 144},
  {red: 252, green: 85, blue: 45},
  {red: 197, green: 203, blue: 57},
  {red: 102, green: 180, blue: 118},
  {red: 242, green: 23, blue: 143},
  {red: 175, green: 214, blue: 58},
  {red: 60, green: 68, blue: 41},
  {red: 207, green: 241, blue: 128},
  {red: 11, green: 244, blue: 94},
  {red: 252, green: 1, blue: 57},
  {red: 91, green: 69, blue: 30},
  {red: 211, green: 155, blue: 39},
  {red: 210, green: 204, blue: 237},
  {red: 77, green: 194, blue: 187},
  {red: 126, green: 17, blue: 118},
  {red: 31, green: 102, blue: 90},
  {red: 50, green: 94, blue: 78},
  {red: 34, green: 34, blue: 74},
  {red: 46, green: 100, blue: 126},
  {red: 56, green: 175, blue: 54},
  {red: 30, green: 143, blue: 94},
  {red: 102, green: 109, blue: 34},
  {red: 215, green: 115, blue: 24},
  {red: 128, green: 217, blue: 160},
  {red: 1, green: 210, blue: 148},
  {red: 132, green: 202, blue: 102},
  {red: 76, green: 38, blue: 70},
  {red: 200, green: 41, blue: 13},
  {red: 23, green: 128, blue: 169},
  {red: 215, green: 172, blue: 116},
  {red: 30, green: 180, blue: 34},
  {red: 235, green: 12, blue: 245},
  {red: 41, green: 240, blue: 177},
  {red: 64, green: 112, blue: 118},
  {red: 231, green: 75, blue: 190},
  {red: 99, green: 235, blue: 131},
  {red: 245, green: 140, blue: 188},
  {red: 145, green: 109, blue: 244},
  {red: 175, green: 194, blue: 35},
  {red: 173, green: 76, blue: 112},
  {red: 220, green: 121, blue: 40},
  {red: 29, green: 156, blue: 46},
  {red: 15, green: 104, blue: 28},
  {red: 229, green: 223, blue: 219},
  {red: 69, green: 133, blue: 41},
  {red: 183, green: 112, blue: 205},
  {red: 108, green: 220, blue: 68},
  {red: 104, green: 160, blue: 63},
  {red: 34, green: 240, blue: 159},
  {red: 175, green: 6, blue: 87},
  {red: 96, green: 71, blue: 98},
  {red: 207, green: 48, blue: 57},
  {red: 37, green: 177, blue: 46},
  {red: 59, green: 151, blue: 52},
  {red: 162, green: 205, blue: 225},
  {red: 96, green: 24, blue: 74},
  {red: 58, green: 41, blue: 193},
  {red: 102, green: 174, blue: 162},
  {red: 66, green: 234, blue: 219},
  {red: 32, green: 190, blue: 64},
  {red: 193, green: 185, blue: 77},
  {red: 12, green: 58, blue: 28},
  {red: 109, green: 141, blue: 249},
  {red: 212, green: 46, blue: 114},
  {red: 79, green: 106, blue: 254},
  {red: 174, green: 205, blue: 10},
  {red: 136, green: 137, blue: 109},
  {red: 225, green: 7, blue: 65},
  {red: 189, green: 104, blue: 45},
  {red: 43, green: 4, blue: 122},
  {red: 74, green: 118, blue: 32},
  {red: 218, green: 198, blue: 19},
  {red: 78, green: 44, blue: 170},
  {red: 44, green: 235, blue: 177},
  {red: 148, green: 161, blue: 67},
  {red: 180, green: 222, blue: 89},
  {red: 74, green: 101, blue: 88},
  {red: 162, green: 187, blue: 168},
  {red: 79, green: 214, blue: 97},
  {red: 231, green: 23, blue: 241},
  {red: 61, green: 166, blue: 166},
  {red: 140, green: 193, blue: 225},
  {red: 168, green: 149, blue: 181},
  {red: 96, green: 46, blue: 88},
  {red: 59, green: 210, blue: 55},
  {red: 94, green: 63, blue: 181},
  {red: 156, green: 114, blue: 113},
  {red: 238, green: 85, blue: 186},
  {red: 183, green: 80, blue: 235},
  {red: 151, green: 201, blue: 6},
  {red: 108, green: 97, blue: 84},
  {red: 185, green: 231, blue: 233},
  {red: 213, green: 19, blue: 29},
  {red: 83, green: 50, blue: 131},
  {red: 96, green: 66, blue: 227},
  {red: 93, green: 63, blue: 141},
  {red: 142, green: 16, blue: 118},
  {red: 66, green: 116, blue: 139},
  {red: 235, green: 186, blue: 244},
  {red: 192, green: 42, blue: 251},
  {red: 167, green: 170, blue: 120},
  {red: 81, green: 67, blue: 226},
  {red: 90, green: 134, blue: 89},
  {red: 17, green: 78, blue: 202},
  {red: 176, green: 111, blue: 86},
  {red: 0, green: 112, blue: 174},
  {red: 55, green: 188, blue: 186},
  {red: 214, green: 88, blue: 189},
  {red: 223, green: 54, blue: 135},
  {red: 216, green: 123, blue: 46},
  {red: 199, green: 211, blue: 220},
  {red: 32, green: 131, blue: 191},
  {red: 15, green: 130, blue: 120},
  {red: 191, green: 224, blue: 248},
  {red: 32, green: 42, blue: 111},
  {red: 8, green: 34, blue: 199},
  {red: 174, green: 250, blue: 66},
  {red: 8, green: 79, blue: 90},
  {red: 138, green: 10, blue: 248},
  {red: 115, green: 23, blue: 246},
  {red: 189, green: 203, blue: 11},
  {red: 15, green: 176, blue: 138},
  {red: 87, green: 214, blue: 8},
  {red: 140, green: 9, blue: 2},
  {red: 194, green: 48, blue: 248},
  {red: 63, green: 168, blue: 111},
  {red: 230, green: 214, blue: 133},
  {red: 55, green: 82, blue: 107},
  {red: 95, green: 146, blue: 189},
  {red: 239, green: 120, blue: 202},
  {red: 176, green: 76, blue: 179},
  {red: 91, green: 87, blue: 73},
  {red: 127, green: 239, blue: 113},
  {red: 123, green: 7, blue: 52},
  {red: 86, green: 122, blue: 55},
  {red: 141, green: 31, blue: 145},
  {red: 13, green: 41, blue: 102},
  {red: 240, green: 161, blue: 28},
  {red: 69, green: 147, blue: 180},
  {red: 158, green: 118, blue: 239},
  {red: 236, green: 148, blue: 222},
  {red: 50, green: 223, blue: 199},
  {red: 107, green: 250, blue: 62},
  {red: 239, green: 52, blue: 29},
  {red: 92, green: 29, blue: 241},
  {red: 192, green: 160, blue: 177},
  {red: 43, green: 188, blue: 213},
  {red: 149, green: 192, blue: 42},
  {red: 241, green: 195, blue: 152},
  {red: 238, green: 93, blue: 225},
  {red: 53, green: 176, blue: 175},
  {red: 229, green: 168, blue: 98},
  {red: 214, green: 200, blue: 224},
  {red: 210, green: 26, blue: 70},
  {red: 246, green: 136, blue: 214},
  {red: 205, green: 121, blue: 63},
  {red: 30, green: 138, blue: 185},
  {red: 157, green: 210, blue: 239},
  {red: 38, green: 17, blue: 249},
  {red: 71, green: 150, blue: 40},
  {red: 25, green: 29, blue: 105},
  {red: 125, green: 244, blue: 189},
  {red: 106, green: 184, blue: 2},
  {red: 116, green: 120, blue: 168},
  {red: 118, green: 36, blue: 236},
  {red: 59, green: 4, blue: 126},
  {red: 66, green: 19, blue: 99},
  {red: 154, green: 128, blue: 147},
  {red: 228, green: 12, blue: 166},
  {red: 211, green: 161, blue: 155},
  {red: 110, green: 252, blue: 239},
  {red: 168, green: 146, blue: 208},
  {red: 2, green: 90, blue: 87},
  {red: 114, green: 202, blue: 255},
  {red: 149, green: 65, blue: 42},
  {red: 116, green: 179, blue: 201},
  {red: 65, green: 108, blue: 136},
  {red: 35, green: 184, blue: 245},
  {red: 12, green: 207, blue: 96},
  {red: 73, green: 200, blue: 252},
  {red: 189, green: 132, blue: 187},
  {red: 194, green: 92, blue: 117},
  {red: 50, green: 66, blue: 126},
  {red: 201, green: 105, blue: 147},
  {red: 254, green: 134, blue: 91},
  {red: 227, green: 7, blue: 246},
  {red: 160, green: 237, blue: 234},
  {red: 38, green: 94, blue: 156},
  {red: 181, green: 207, blue: 249},
  {red: 88, green: 53, blue: 87},
  {red: 87, green: 119, blue: 20},
  {red: 111, green: 46, blue: 171},
  {red: 78, green: 254, blue: 52},
  {red: 236, green: 21, blue: 227},
  {red: 83, green: 201, blue: 127},
  {red: 19, green: 170, blue: 177},
  {red: 182, green: 3, blue: 40},
  {red: 99, green: 3, blue: 162},
  {red: 62, green: 245, blue: 180},
  {red: 133, green: 49, blue: 58},
  {red: 58, green: 36, blue: 250},
  {red: 253, green: 235, blue: 178},
  {red: 219, green: 115, blue: 37},
  {red: 225, green: 83, blue: 250},
  {red: 41, green: 234, blue: 148},
  {red: 118, green: 139, blue: 193},
  {red: 86, green: 213, blue: 4},
  {red: 28, green: 136, blue: 72},
  {red: 147, green: 101, blue: 108},
  {red: 46, green: 75, blue: 41},
  {red: 128, green: 124, blue: 117},
  {red: 222, green: 121, blue: 169},
  {red: 215, green: 36, blue: 99},
  {red: 193, green: 248, blue: 160},
  {red: 103, green: 62, blue: 66},
  {red: 97, green: 59, blue: 83},
  {red: 56, green: 253, blue: 127},
  {red: 103, green: 231, blue: 22},
  {red: 181, green: 121, blue: 87},
  {red: 49, green: 219, blue: 233},
  {red: 148, green: 165, blue: 39},
  {red: 88, green: 205, blue: 90},
  {red: 33, green: 99, blue: 181},
  {red: 206, green: 51, blue: 184},
  {red: 127, green: 74, blue: 209},
  {red: 29, green: 85, blue: 139},
  {red: 60, green: 179, blue: 216},
  {red: 151, green: 93, blue: 51},
  {red: 158, green: 253, blue: 121},
  {red: 149, green: 172, blue: 38},
  {red: 139, green: 232, blue: 251},
  {red: 37, green: 120, blue: 237},
  {red: 212, green: 64, blue: 206},
  {red: 38, green: 48, blue: 106},
  {red: 178, green: 255, blue: 165},
  {red: 120, green: 165, blue: 95},
  {red: 176, green: 194, blue: 100},
  {red: 10, green: 159, blue: 199},
  {red: 29, green: 96, blue: 50},
  {red: 207, green: 192, blue: 23},
  {red: 201, green: 216, blue: 230},
  {red: 144, green: 171, blue: 205},
  {red: 1, green: 233, blue: 82},
  {red: 22, green: 3, blue: 125},
  {red: 2, green: 130, blue: 73},
  {red: 64, green: 27, blue: 242},
  {red: 116, green: 147, blue: 21},
  {red: 26, green: 252, blue: 157},
  {red: 236, green: 143, blue: 212},
  {red: 116, green: 178, blue: 172},
  {red: 19, green: 73, blue: 0},
  {red: 192, green: 105, blue: 246},
  {red: 80, green: 115, blue: 181},
  {red: 205, green: 31, blue: 187},
  {red: 217, green: 81, blue: 160},
  {red: 164, green: 18, blue: 116},
  {red: 224, green: 41, blue: 240},
  {red: 33, green: 233, blue: 221},
  {red: 203, green: 18, blue: 238},
  {red: 1, green: 255, blue: 252},
  {red: 111, green: 38, blue: 162},
  {red: 194, green: 46, blue: 2},
  {red: 95, green: 227, blue: 192},
  {red: 16, green: 52, blue: 247},
  {red: 253, green: 2, blue: 190},
  {red: 212, green: 61, blue: 209},
  {red: 219, green: 84, blue: 6},
  {red: 217, green: 151, blue: 51},
  {red: 174, green: 164, blue: 91},
  {red: 217, green: 61, blue: 166},
  {red: 54, green: 186, blue: 117},
  {red: 211, green: 132, blue: 3},
  {red: 167, green: 75, blue: 167},
  {red: 176, green: 67, blue: 129},
  {red: 127, green: 141, blue: 30},
  {red: 245, green: 172, blue: 254},
  {red: 12, green: 76, blue: 214},
  {red: 190, green: 96, blue: 143},
  {red: 191, green: 14, blue: 52},
  {red: 199, green: 143, blue: 14},
  {red: 151, green: 236, blue: 175},
  {red: 112, green: 186, blue: 175},
  {red: 217, green: 237, blue: 68},
  {red: 12, green: 164, blue: 197},
  {red: 222, green: 42, blue: 199},
  {red: 139, green: 21, blue: 4},
  {red: 201, green: 65, blue: 159},
  {red: 237, green: 31, blue: 220},
  {red: 225, green: 123, blue: 159},
  {red: 141, green: 66, blue: 7},
  {red: 94, green: 185, blue: 136},
  {red: 243, green: 173, blue: 6},
  {red: 15, green: 122, blue: 24},
  {red: 140, green: 236, blue: 81},
  {red: 70, green: 16, blue: 29},
  {red: 161, green: 215, blue: 92},
  {red: 83, green: 14, blue: 196},
  {red: 159, green: 195, blue: 30},
  {red: 95, green: 124, blue: 229},
  {red: 17, green: 21, blue: 207},
  {red: 103, green: 133, blue: 45},
  {red: 216, green: 88, blue: 49},
  {red: 108, green: 174, blue: 126},
  {red: 1, green: 46, blue: 159},
  {red: 172, green: 180, blue: 85},
  {red: 193, green: 204, blue: 54},
  {red: 8, green: 97, blue: 71},
  {red: 11, green: 196, blue: 68},
  {red: 178, green: 170, blue: 118},
  {red: 11, green: 236, blue: 158},
  {red: 72, green: 107, blue: 124},
  {red: 59, green: 104, blue: 107},
  {red: 66, green: 169, blue: 205},
  {red: 107, green: 138, blue: 30},
  {red: 228, green: 117, blue: 74},
  {red: 228, green: 28, blue: 241}
]

export default colors;
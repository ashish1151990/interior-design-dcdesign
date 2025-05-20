"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("./mongodb");
var Project_1 = require("@/models/Project");
var Employee_1 = require("@/models/Employee");
var Review_1 = require("@/models/Review");
var User_1 = require("@/models/User");
var seedDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var adminPassword, adminUser, employees, projects, reviews, _loop_1, _i, employees_1, employee, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 16, 17, 18]);
                return [4 /*yield*/, (0, mongodb_1.connectToDatabase)()];
            case 1:
                _a.sent();
                // Clear existing data
                return [4 /*yield*/, Project_1.default.deleteMany({})];
            case 2:
                // Clear existing data
                _a.sent();
                return [4 /*yield*/, Employee_1.default.deleteMany({})];
            case 3:
                _a.sent();
                return [4 /*yield*/, Review_1.default.deleteMany({})];
            case 4:
                _a.sent();
                return [4 /*yield*/, User_1.default.deleteMany({})];
            case 5:
                _a.sent();
                adminPassword = 'admin123';
                adminUser = new User_1.default({
                    username: 'admin',
                    password: adminPassword, // Will be hashed by the pre-save hook
                    name: 'Admin User',
                    role: 'admin'
                });
                console.log("🔧 Seeding admin...");
                return [4 /*yield*/, adminUser.save()];
            case 6:
                _a.sent();
                console.log('Admin user created');
                return [4 /*yield*/, Employee_1.default.create([
                        {
                            name: 'Jane Smith',
                            role: 'Lead Designer',
                            bio: 'Jane has over 10 years of experience in interior design, specializing in modern residential spaces.',
                            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                        },
                        {
                            name: 'John Davis',
                            role: 'Senior Designer',
                            bio: 'John specializes in commercial spaces and has worked with numerous high-profile clients.',
                            image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
                        },
                        {
                            name: 'Emily Johnson',
                            role: 'Junior Designer',
                            bio: 'Emily is passionate about sustainable design and bringing natural elements into interior spaces.',
                            image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
                        },
                    ])];
            case 7:
                employees = _a.sent();
                console.log('Employees created');
                return [4 /*yield*/, Project_1.default.create([
                        {
                            title: 'Modern Loft Renovation',
                            description: 'A complete renovation of a downtown loft space, transforming it into a modern, open-concept living area with plenty of natural light.',
                            status: 'completed',
                            images: [
                                'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
                                'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
                                'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg',
                            ],
                            videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
                            featured: true,
                            client: 'Urban Living Co.',
                            location: 'New York, NY',
                            completedDate: new Date('2023-04-15'),
                            employees: [employees[0]._id, employees[2]._id],
                        },
                        {
                            title: 'Coastal Beach House',
                            description: 'A serene beach house design featuring light colors, natural materials, and panoramic views of the ocean.',
                            status: 'completed',
                            images: [
                                'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
                                'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
                                'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
                            ],
                            videos: [],
                            featured: true,
                            client: 'Coastal Properties',
                            location: 'Malibu, CA',
                            completedDate: new Date('2023-08-10'),
                            employees: [employees[1]._id, employees[0]._id],
                        },
                        {
                            title: 'Boutique Hotel Lobby',
                            description: 'A luxury boutique hotel lobby featuring custom artwork, elegant seating, and a striking reception desk.',
                            status: 'ongoing',
                            images: [
                                'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
                                'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
                            ],
                            videos: [],
                            featured: false,
                            client: 'Elite Hotels Group',
                            location: 'Chicago, IL',
                            employees: [employees[0]._id, employees[1]._id, employees[2]._id],
                        },
                    ])];
            case 8:
                projects = _a.sent();
                console.log('Projects created');
                return [4 /*yield*/, Review_1.default.create([
                        {
                            clientName: 'Robert Johnson',
                            text: 'The team at Interior transformed our outdated loft into a stunning modern space. We couldn\'t be happier with the results!',
                            rating: 5,
                            project: projects[0]._id,
                        },
                        {
                            clientName: 'Sarah Williams',
                            text: 'Working with Jane and Emily was a pleasure. They understood our vision perfectly and delivered beyond our expectations.',
                            rating: 5,
                            project: projects[0]._id,
                        },
                        {
                            clientName: 'Michael Chen',
                            text: 'Our beach house is now the perfect getaway. The design captures the coastal vibe while maintaining elegance and comfort.',
                            rating: 4,
                            project: projects[1]._id,
                        },
                    ])];
            case 9:
                reviews = _a.sent();
                console.log('Reviews created');
                // Update projects with reviews
                return [4 /*yield*/, Project_1.default.findByIdAndUpdate(projects[0]._id, {
                        reviews: [reviews[0]._id, reviews[1]._id],
                    })];
            case 10:
                // Update projects with reviews
                _a.sent();
                return [4 /*yield*/, Project_1.default.findByIdAndUpdate(projects[1]._id, {
                        reviews: [reviews[2]._id],
                    })];
            case 11:
                _a.sent();
                console.log('Projects updated with reviews');
                _loop_1 = function (employee) {
                    var employeeProjects;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                employeeProjects = projects.filter(function (project) {
                                    return project.employees.some(function (emp) {
                                        return emp.toString() === employee._id.toString();
                                    });
                                });
                                return [4 /*yield*/, Employee_1.default.findByIdAndUpdate(employee._id, {
                                        projects: employeeProjects.map(function (project) { return project._id; }),
                                    })];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                };
                _i = 0, employees_1 = employees;
                _a.label = 12;
            case 12:
                if (!(_i < employees_1.length)) return [3 /*break*/, 15];
                employee = employees_1[_i];
                return [5 /*yield**/, _loop_1(employee)];
            case 13:
                _a.sent();
                _a.label = 14;
            case 14:
                _i++;
                return [3 /*break*/, 12];
            case 15:
                console.log('Employees updated with projects');
                return [3 /*break*/, 18];
            case 16:
                error_1 = _a.sent();
                console.error('Error seeding database:', error_1);
                return [3 /*break*/, 18];
            case 17: return [7 /*endfinally*/];
            case 18: return [2 /*return*/];
        }
    });
}); };
exports.default = seedDatabase;

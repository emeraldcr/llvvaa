'use client';
import React, { useState, useEffect } from 'react';
import { 
  User, 
  MapPin, 
  Calendar, 
  Star, 
  Camera, 
  MessageSquare, 
  LogOut,
  Eye,
  Edit3,
  Upload,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

// MongoDB API calls - Replace with your actual backend endpoints
const API_BASE = 'http://localhost:3001/api'; // Your backend URL

const mongoAPI = {
  // Register new user
  register: async (userData: { name: string; email: string; password: string }) => {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  // Login user
  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  // Get user tours
  getUserTours: async (userId: string, token: string) => {
    const response = await fetch(`${API_BASE}/tours/user/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  // Save review
  saveReview: async (reviewData: any, token: string) => {
    const response = await fetch(`${API_BASE}/reviews`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(reviewData)
    });
    return response.json();
  }
};

// Types
interface Tour {
  id: string;
  name: string;
  location: string;
  date: string;
  duration: string;
  guide: string;
  participants: number;
  status: 'completed' | 'upcoming' | 'cancelled';
  description: string;
  price: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: 'Hiking' | 'Wildlife' | 'Cultural' | 'Adventure';
}

interface Review {
  id: string;
  tourId: string;
  rating: number;
  comment: string;
  guideRating: number;
  guideComment: string;
  dateCreated: string;
}

interface Photo {
  id: string;
  tourId: string;
  url: string;
  caption: string;
  dateUploaded: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  token?: string; // JWT token for authentication
}

const LaViejaAdventuresApp: React.FC = () => {
  // State management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [activeTab, setActiveTab] = useState<'tours' | 'reviews' | 'photos'>('tours');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    name: '', 
    email: '', 
    password: ''
  });
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock data - In a real app, this would come from an API
  const mockTours: Tour[] = [
    {
      id: '1',
      name: 'Arenal Volcano Hike',
      location: 'Arenal National Park',
      date: '2024-03-15',
      duration: '6 hours',
      guide: 'Carlos Mendez',
      participants: 8,
      status: 'completed',
      description: 'Challenging hike to the base of Arenal Volcano with stunning views of the crater and surrounding rainforest.',
      price: 85,
      difficulty: 'Challenging',
      category: 'Hiking'
    },
    {
      id: '2',
      name: 'Manuel Antonio Wildlife Tour',
      location: 'Manuel Antonio National Park',
      date: '2024-02-20',
      duration: '4 hours',
      guide: 'Maria Rodriguez',
      participants: 12,
      status: 'completed',
      description: 'Guided wildlife spotting tour through the diverse ecosystems of Manuel Antonio.',
      price: 65,
      difficulty: 'Easy',
      category: 'Wildlife'
    },
    {
      id: '3',
      name: 'Monteverde Cloud Forest Adventure',
      location: 'Monteverde',
      date: '2024-05-10',
      duration: '8 hours',
      guide: 'Diego Vargas',
      participants: 6,
      status: 'upcoming',
      description: 'Full day exploration of the mystical cloud forest with canopy walks and bird watching.',
      price: 120,
      difficulty: 'Moderate',
      category: 'Adventure'
    }
  ];

  const mockReviews: Review[] = [
    {
      id: '1',
      tourId: '1',
      rating: 5,
      comment: 'Absolutely incredible experience! The views were breathtaking and Carlos was an amazing guide.',
      guideRating: 5,
      guideComment: 'Carlos was extremely knowledgeable about the local flora and fauna. Highly recommend!',
      dateCreated: '2024-03-16'
    },
    {
      id: '2',
      tourId: '2',
      rating: 4,
      comment: 'Great wildlife spotting tour. Saw sloths, monkeys, and beautiful birds.',
      guideRating: 4,
      guideComment: 'Maria was very patient and helped us spot animals we would have missed otherwise.',
      dateCreated: '2024-02-21'
    }
  ];

  const mockPhotos: Photo[] = [
    {
      id: '1',
      tourId: '1',
      url: 'https://via.placeholder.com/400x300/228B22/FFFFFF?text=Arenal+Volcano',
      caption: 'Stunning view of Arenal Volcano from the hiking trail',
      dateUploaded: '2024-03-15'
    },
    {
      id: '2',
      tourId: '1',
      url: 'https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Trail+View',
      caption: 'Dense rainforest along the hiking trail',
      dateUploaded: '2024-03-15'
    },
    {
      id: '3',
      tourId: '2',
      url: 'https://via.placeholder.com/400x300/32CD32/FFFFFF?text=Sloth',
      caption: 'Three-toed sloth spotted during the wildlife tour',
      dateUploaded: '2024-02-20'
    }
  ];

  // Initialize data on component mount
  useEffect(() => {
    setTours(mockTours);
    setReviews(mockReviews);
    setPhotos(mockPhotos);
  }, []);

  // Login handler - MongoDB call
  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await mongoAPI.login(loginData);
      
      if (result.success) {
        setCurrentUser({
          id: result.user._id,
          name: result.user.name,
          email: result.user.email,
          avatar: `https://via.placeholder.com/40x40/4CAF50/FFFFFF?text=${result.user.name.charAt(0).toUpperCase()}`,
          token: result.token
        });
        setIsLoggedIn(true);
        
        // Load user's tours
        loadUserTours(result.user._id, result.token);
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Register handler - MongoDB call
  const handleRegister = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await mongoAPI.register(registerData);
      
      if (result.success) {
        // Auto-login after successful registration
        setLoginData({ email: registerData.email, password: registerData.password });
        await handleLogin();
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Load user tours from MongoDB
  const loadUserTours = async (userId: string, token: string) => {
    try {
      const result = await mongoAPI.getUserTours(userId, token);
      if (result.success) {
        setTours(result.tours || mockTours); // Fallback to mock data
      }
    } catch (err) {
      console.error('Error loading tours:', err);
      setTours(mockTours); // Use mock data on error
    }
  };

  // Toggle between login and register modes
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    // Clear forms when switching
    setLoginData({ email: '', password: '' });
    setRegisterData({ name: '', email: '', password: '' });
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setLoginData({ email: '', password: '' });
    setRegisterData({ name: '', email: '', password: '' });
    setIsLoginMode(true);
    setError('');
  };

  // Review submission handler - MongoDB call
  const handleReviewSubmit = async (tourId: string, reviewData: Omit<Review, 'id' | 'tourId' | 'dateCreated'>) => {
    if (!currentUser?.token) return;
    
    try {
      const result = await mongoAPI.saveReview({
        ...reviewData,
        tourId,
        userId: currentUser.id
      }, currentUser.token);
      
      if (result.success) {
        const newReview: Review = {
          id: result.review._id,
          tourId,
          ...reviewData,
          dateCreated: new Date().toISOString().split('T')[0]
        };
        setReviews([...reviews, newReview]);
        setIsReviewModalOpen(false);
      }
    } catch (err) {
      console.error('Error saving review:', err);
    }
  };

  // Photo upload handler (mock)
  const handlePhotoUpload = (tourId: string, caption: string) => {
    const newPhoto: Photo = {
      id: Date.now().toString(),
      tourId,
      url: `https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=New+Photo`,
      caption,
      dateUploaded: new Date().toISOString().split('T')[0]
    };
    setPhotos([...photos, newPhoto]);
    setIsPhotoModalOpen(false);
  };

  // Get tour statistics
  const getStats = () => {
    const completed = tours.filter(tour => tour.status === 'completed').length;
    const upcoming = tours.filter(tour => tour.status === 'upcoming').length;
    const totalReviews = reviews.length;
    const avgRating = reviews.length > 0 
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
      : 0;
    
    return { completed, upcoming, totalReviews, avgRating };
  };

  const stats = getStats();

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">La Vieja Adventures</h1>
            <p className="text-gray-600">
              {isLoginMode ? 'Welcome back, adventurer!' : 'Join our adventure community'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-md">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Registration Success Message */}
          {registrationSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-md">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <p className="text-green-800 font-medium">Registration Successful!</p>
                  <p className="text-green-700 text-sm">Logging you in automatically...</p>
                </div>
              </div>
            </div>
          )}

          {/* Toggle Tabs */}
          <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                isLoginMode 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                !isLoginMode 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>
          
          {/* Login Form */}
          {isLoginMode ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  placeholder="Your password"
                />
              </div>
              
              <button
                onClick={handleLogin}
                disabled={!loginData.email || !loginData.password || isLoading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={toggleMode}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </div>
          ) : (
            /* Register Form */
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  placeholder="Choose a strong password"
                />
              </div>
              
              <button
                onClick={handleRegister}
                disabled={!registerData.name || !registerData.email || !registerData.password || isLoading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 mt-6"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={toggleMode}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          )}
          
          <p className="text-center text-xs text-gray-500 mt-6">
            {isLoginMode 
              ? 'Demo: Use demo@laviejadventures.com / password123 or register new account' 
              : 'Demo: Create account to access your adventure dashboard'
            }
          </p>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">La Vieja Adventures</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={currentUser?.avatar} 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{currentUser?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Tours</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming Tours</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.upcoming}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.avgRating.toFixed(1)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reviews Written</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalReviews}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { key: 'tours', label: 'My Tours', icon: MapPin },
              { key: 'reviews', label: 'Reviews', icon: Star },
              { key: 'photos', label: 'Photos', icon: Camera }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === key
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{tour.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(tour.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{tour.participants} participants</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tour.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : tour.status === 'upcoming'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tour.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-800'
                        : tour.difficulty === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {tour.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{tour.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Guide:</span> {tour.guide}
                  </div>
                  
                  <div className="flex space-x-2">
                    {tour.status === 'completed' && (
                      <button
                        onClick={() => {
                          setSelectedTour(tour);
                          setIsReviewModalOpen(true);
                        }}
                        className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition"
                      >
                        <Edit3 size={16} />
                        <span>Review</span>
                      </button>
                    )}
                    
                    <button
                      onClick={() => {
                        setSelectedTour(tour);
                        setIsPhotoModalOpen(true);
                      }}
                      className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition"
                    >
                      <Upload size={16} />
                      <span>Photos</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {reviews.map((review) => {
              const tour = tours.find(t => t.id === review.tourId);
              return (
                <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{tour?.name}</h3>
                      <p className="text-sm text-gray-600">{new Date(review.dateCreated).toLocaleDateString()}</p>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Tour Experience</h4>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Guide Rating</h4>
                      <div className="flex items-center space-x-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < review.guideRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.guideComment}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => {
              const tour = tours.find(t => t.id === photo.tourId);
              return (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={photo.caption}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{tour?.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{photo.caption}</p>
                    <p className="text-xs text-gray-500">{new Date(photo.dateUploaded).toLocaleDateString()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && selectedTour && (
        <ReviewModal
          tour={selectedTour}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmit={(reviewData) => handleReviewSubmit(selectedTour.id, reviewData)}
        />
      )}

      {/* Photo Upload Modal */}
      {isPhotoModalOpen && selectedTour && (
        <PhotoUploadModal
          tour={selectedTour}
          onClose={() => setIsPhotoModalOpen(false)}
          onUpload={(caption) => handlePhotoUpload(selectedTour.id, caption)}
        />
      )}
    </div>
  );
};

// Review Modal Component
const ReviewModal: React.FC<{
  tour: Tour;
  onClose: () => void;
  onSubmit: (reviewData: Omit<Review, 'id' | 'tourId' | 'dateCreated'>) => void;
}> = ({ tour, onClose, onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [guideRating, setGuideRating] = useState(5);
  const [guideComment, setGuideComment] = useState('');

  const handleSubmit = () => {
    onSubmit({ rating, comment, guideRating, guideComment });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Review: {tour.name}</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tour Rating</label>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i + 1)}
                  className="focus:outline-none"
                >
                  <Star
                    size={24}
                    className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tour Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Share your experience..."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guide Rating</label>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setGuideRating(i + 1)}
                  className="focus:outline-none"
                >
                  <Star
                    size={24}
                    className={i < guideRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guide Comment</label>
            <textarea
              value={guideComment}
              onChange={(e) => setGuideComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="How was your guide?"
              required
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Photo Upload Modal Component
const PhotoUploadModal: React.FC<{
  tour: Tour;
  onClose: () => void;
  onUpload: (caption: string) => void;
}> = ({ tour, onClose, onUpload }) => {
  const [caption, setCaption] = useState('');

  const handleSubmit = () => {
    onUpload(caption);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Photo: {tour.name}</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Photo Upload</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Describe your photo..."
              required
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Upload Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaViejaAdventuresApp;
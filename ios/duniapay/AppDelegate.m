#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <FBSDKCoreKit/FBSDKCoreKit.h>

#import "RNSplashScreen.h"

#if RCT_DEV
#import <React/RCTDevLoadingView.h>
#endif

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //Clear keychain on first run in case of reinstallation
  if (![[NSUserDefaults standardUserDefaults] objectForKey:@"FirstRun"]) {
    NSString * key = @"DUNIAPAY_KEY";
    NSLog(@"First run. Attempting to purge any existing persisted state.");

    NSDictionary* query = [NSDictionary dictionaryWithObjectsAndKeys:
                           (id)kSecClassGenericPassword, kSecClass,
                           key, kSecAttrAccount,
                           kCFBooleanTrue, kSecReturnAttributes,
                           kCFBooleanTrue, kSecReturnData, nil];
    OSStatus osStatus = SecItemDelete((CFDictionaryRef) query);

    [[NSUserDefaults standardUserDefaults] setValue:@"1strun" forKey:@"FirstRun"];
    [[NSUserDefaults standardUserDefaults] synchronize];
  }

#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.js" fallbackResource:nil];

  RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation moduleProvider:nil launchOptions:launchOptions];

#if RCT_DEV
  [bridge moduleForClass:[RCTDevLoadingView class]];
#endif

  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"duniapay"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  [RNSplashScreen show];

  [[FBSDKApplicationDelegate sharedInstance] application:application
                           didFinishLaunchingWithOptions:launchOptions];
  return YES;
}

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
{
  [[FBSDKApplicationDelegate sharedInstance] application:application
                                                 openURL:url
                                                 options:options];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end

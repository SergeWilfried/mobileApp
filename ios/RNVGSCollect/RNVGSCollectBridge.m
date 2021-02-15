#import <React/RCTBridgeModule.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNVGSCollect, RCTViewManager)

  RCT_EXTERN_METHOD(
    submitCardData: (NSDictionary *)extraCardData
    token: (NSString)token
    callback: (RCTResponseSenderBlock)callback
  );

@end

@interface RCT_EXTERN_MODULE(RNVGSCardTextField, RCTViewManager)
@end

@interface RCT_EXTERN_MODULE(RNVGSCVCTextField, RCTViewManager)
@end

@interface RCT_EXTERN_MODULE(RNVGSExpDateTextField, RCTViewManager)
@end

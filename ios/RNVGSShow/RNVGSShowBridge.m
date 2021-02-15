#import "React/RCTBridgeModule.h"
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNVGSShowViewManager, RCTViewManager)
  RCT_EXTERN_METHOD(
    revealFromManager:(nonnull NSNumber *)node
    cardId:(nonnull NSString *)cardId
    token:(nonnull NSString *)token
  )
@end

@interface RCT_EXTERN_MODULE(RNVGSShowLabelViewManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(vgsShowViewNodeHandle, NSNumber)
  RCT_EXPORT_VIEW_PROPERTY(contentPath, NSString)
@end
